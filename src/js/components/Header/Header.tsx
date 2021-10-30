import * as React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';


import './header.less'
import { Logo } from './Logo/Logo';


export const Header = () => {
    return (
        <header className="header shadow">
            <Navbar bg="light" expand="lg">
                <Container fluid>

                    <Navbar.Brand href="#home">
                        <Logo src="/uploads/myLogo.png" />
                    </Navbar.Brand>

                    <HeaderMenu />

                </Container>
            </Navbar>


        </header>
    )
}