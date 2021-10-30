import * as React from 'react'

interface IPageContainer {

}

export const PageContainer = (props:any = {arrayClass: []}): JSX.Element => {
    const classNames = [...props.arrayClass, 'container-fluide']
    return (
        <main className={classNames.join(" ")}>
            {props.children}
        </main>
    )
}