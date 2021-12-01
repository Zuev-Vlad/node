const Libs = {
    sendRespSuccess(params = {}) {
        return JSON.stringify({
            success: true,
            data: params
        })
    },
    sendRespError(params = {}) {
        return JSON.stringify({
            success: false,
            data: params
        })
    }
}

module.exports = Libs