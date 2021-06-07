import React from 'react'
import { Nav } from 'react-bootstrap';

export const HeaderMenu = ({
    menuList = []
}) => {
    return (
       <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Главная</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/auth">Авторизация</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/personal" onClick={() => alert('vasy')}>Личный кабинет</Nav.Link>
          </Nav.Item>
        </Nav>
    )
}