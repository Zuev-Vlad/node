import * as React from 'react'
// import { Preloader } from '../components/Preloader/Preloader'
// import { Section } from '../HOC/Section/Section'
import { Preloader } from '../../components/Preloader/Preloader';
import { Section } from '../../HOC/Section/Section';


import './contentIndex.less'


export const ContentIndex = () => {
    return (
        <React.Fragment>

            <Section addedClassName="section-hero">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex">
                        <h1 className="dark-text m-auto">
                            <b>
                                У программиста нет <span className="bright-text">цели</span>, есть только <span className="bright-text">путь...</span>
                            </b>
                        </h1>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="img-wrapper">
                            <img src={'/uploads/programer.gif'} className="" />
                        </div>
                    </div>
                </div>
            </Section>

            <Preloader />
        </React.Fragment>
    )
}