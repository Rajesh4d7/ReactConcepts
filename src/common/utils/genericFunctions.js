export const isEmpty = (target) => {
    if(target === null || target === undefined) {
        return true
    }
    if(target && typeof target === 'object') {
        return Object.keys(target).length === 0

    }
    return target?.length === 0
}