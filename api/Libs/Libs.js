const Libs = {
    sendRespSuccess(params = {}) {
        return JSON.stringify({
            success: true,
            data: params
        })
    }
}

module.exports = Libs