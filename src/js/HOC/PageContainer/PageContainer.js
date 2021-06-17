import React from 'react'



export const PageContainer = (props) => {
    const classNames = [...props.arrayClass, 'container']
    return (
        <div className={classNames.join(" ")}>
            {props.children}
        </div>
    )
}