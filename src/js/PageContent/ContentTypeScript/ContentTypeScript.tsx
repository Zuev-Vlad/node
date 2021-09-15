
import * as React from 'react'
import { Preloader } from '../../components/Preloader/Preloader';



interface IContentTypeScriptProps {
    text: string,
    onClick: (event: React.SyntheticEvent) => void;
}

export const ContentTypeScript = ({ text, onClick }: IContentTypeScriptProps) => {
    return (
        <div className="form-group">
            <input className="form-control" type="text" name="" id="" />
            <button onClick={onClick} className="btn btn-primary" > {text} </button>
            <Preloader/>
        </div>
    )
}
