import 'react'
import useForm from '../hooks/useForm'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validator = (form) => {
    const { value = '', field } = form;
    const trimmedValue = typeof value === 'string' ? value.trim() : String(value ?? '');

    switch (field) {
        case 'name':
            if (!trimmedValue) {
                return { ...form, error: 'Name should not be empty' };
            }
            if (trimmedValue.length < 2) {
                return { ...form, error: 'Name should be at least 2 characters' };
            }
            return { ...form, error: '' };
        case 'email':
            if (!trimmedValue) {
                return { ...form, error: 'Email should not be empty' };
            }
            if (!EMAIL_PATTERN.test(trimmedValue)) {
                return { ...form, error: 'Enter a valid email address' };
            }
            return { ...form, error: '' };
        case 'password':
            if (!value) {
                return { ...form, error: 'Password should not be empty' };
            }
            if (value.length < 8) {
                return { ...form, error: 'Password should be at least 8 characters' };
            }
            return { ...form, error: '' };
        default:
            return { ...form, error: '' };
    }
}

const FIELDS = {
    name: {
        value: '',
        error: '',
    },
    email: {
        value: '',
        error: '',
    },
    password: {
        value: '',
        error: '',
    },
}

const FIELD_CONFIG = [
    { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { name: 'password', label: 'Password', type: 'password', autoComplete: 'new-password' },
]

const UserRegistrationForm = () => {
    const [handleChange, submitHandler, formFields, handleBlur, reset] = useForm(FIELDS, validator)

    const handleSubmit = (event) => {
        event.preventDefault()
        submitHandler()
    }

    return (
        <div>
            <h2>useForm hook</h2>
            <p>Requirement: Implement a custom hook for form state with useReducer, validation, and touched fields.</p>
            <form onSubmit={handleSubmit} noValidate>
                {FIELD_CONFIG.map(({ name, label, type, autoComplete }) => {
                    const field = formFields[name]
                    const errorId = `${name}-error`
                    const showError = field.touched && Boolean(field.error)

                    return (
                        <div className="form-group" key={name}>
                            <label htmlFor={name}>{label}</label>
                            <input
                                id={name}
                                name={name}
                                type={type}
                                autoComplete={autoComplete}
                                value={field.value}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={showError}
                                aria-describedby={showError ? errorId : undefined}
                            />
                            {showError && (
                                <p id={errorId} className="field-error">{field.error}</p>
                            )}
                        </div>
                    )
                })}
                {formFields.isError && (
                    <p className="field-error" role="alert">{formFields.errorMessage}</p>
                )}
                {formFields.isSuccess && (
                    <p className="field-success" role="status">Form submitted successfully</p>
                )}
                <button type="submit" disabled={formFields.isSubmitting}>Register</button>
                <button type="button" onClick={reset}>Reset</button>
            </form>
        </div>
    )
}

export default UserRegistrationForm
