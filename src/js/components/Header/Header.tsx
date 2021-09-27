import * as React from 'react'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

import './header.less'


export const Header = () => {
    return (
        <header className="header transparent-header">
            <div className="header-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="img/logo/logo.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderMenu />
        </header>
    )
}