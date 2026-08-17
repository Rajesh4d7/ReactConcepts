import { useReducer } from "react";

const META_KEYS = new Set([
    'isValid',
    'isSubmitting',
    'isSuccess',
    'isError',
    'errorMessage',
]);

const getFieldNames = (state) =>
    Object.keys(state).filter((key) => !META_KEYS.has(key));

const createInitialState = (fields) => {
    const nextFields = {};

    for (const [name, field] of Object.entries(fields)) {
        nextFields[name] = {
            value: field.value ?? '',
            error: field.error ?? '',
            touched: field.touched ?? false,
        };
    }

    return {
        ...nextFields,
        isValid: false,
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    };
};

const isFormValid = (state, validator) =>
    getFieldNames(state).every((field) => {
        const { error } = validator({ field, value: state[field].value });
        return !error;
    });

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.value,
                    error: action.error,
                },
                isValid: action.isValid,
                isSuccess: false,
                isError: false,
                errorMessage: '',
            };
        case 'SET_TOUCHED':
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    touched: true,
                    error: action.error,
                },
                isValid: action.isValid,
            };
        case 'SUBMIT_ATTEMPT':
            return {
                ...state,
                ...action.fields,
                isValid: action.isValid,
                isSubmitting: false,
                isSuccess: action.isValid,
                isError: !action.isValid,
                errorMessage: action.isValid
                    ? ''
                    : 'Please fix the errors before submitting',
            };
        case 'RESET':
            return action.initialState;
        default:
            return state;
    }
};

const useForm = (fields, validator) => {
    const [state, dispatch] = useReducer(reducer, fields, createInitialState);

    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const { error } = validator({ field, value });
        const nextState = {
            ...state,
            [field]: {
                ...state[field],
                value,
                error: state[field]?.touched ? error : '',
            },
        };

        dispatch({
            type: 'SET_FIELD',
            field,
            value,
            error: state[field]?.touched ? error : '',
            isValid: isFormValid(nextState, validator),
        });
    };

    const handleBlur = (event) => {
        const field = event.target.name;
        const { error } = validator({ field, value: state[field].value });
        const nextState = {
            ...state,
            [field]: {
                ...state[field],
                touched: true,
                error,
            },
        };

        dispatch({
            type: 'SET_TOUCHED',
            field,
            error,
            isValid: isFormValid(nextState, validator),
        });
    };

    const handleSubmit = () => {
        const nextFields = {};
        let isValid = true;

        for (const field of getFieldNames(state)) {
            const { error } = validator({ field, value: state[field].value });
            nextFields[field] = {
                ...state[field],
                error,
                touched: true,
            };
            if (error) {
                isValid = false;
            }
        }

        dispatch({
            type: 'SUBMIT_ATTEMPT',
            fields: nextFields,
            isValid,
        });
    };

    const reset = () => {
        dispatch({ type: 'RESET', initialState: createInitialState(fields) });
    };

    return [handleChange, handleSubmit, state, handleBlur, reset];
};

export default useForm;
