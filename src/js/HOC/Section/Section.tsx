import * as React from "react";

export const Section = (props: any) => {
    return (
        <section className={`${props.addedClassName} section`}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}