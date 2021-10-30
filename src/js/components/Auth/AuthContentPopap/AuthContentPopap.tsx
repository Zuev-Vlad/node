import * as React from "react"


export const AuthContentPopap = () => {
    return (
        <form className="auth-popap-form">
            <div className="form-group">
                <label htmlFor="">Логин</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group pt-3">
                <label htmlFor="">Пароль</label>
                <input type="password" className="form-control" />
            </div>
        </form>
    )
}