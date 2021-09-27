import * as React from "react";


interface ILogoProps {
    src: string
}

export const Logo = ({
    src = ''
}: ILogoProps): JSX.Element => {

    return (
        <div className="logo">
            <a href="/">
                <img src={src} alt="Logo" style={{maxWidth: 130}}/>
            </a>
        </div>
    )
}