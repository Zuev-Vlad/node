import React from 'react'
import { Preloader } from '../components/Preloader/Preloader'
import { ContentTypeScript } from './ContentTypeScript/ContentTypeScript.tsx';


export const ContentIndex = () => {
    return (
        <React.Fragment>
            <h1 className="">Это главная страницаы</h1>
            <ContentTypeScript />
            <Preloader />
        </React.Fragment>
    )
}