export const checkRespForSuccess = (resp = {}) => {
    return (resp.hasOwnProperty('success') && resp.success)
}