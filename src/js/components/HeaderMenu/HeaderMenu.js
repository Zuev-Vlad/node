import React from 'react'
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setIsOpenPopap } from '../../redux/PopapReducer/actions';


const BtnOpenPopap = () => {
  const setOpen = () => {
    setIsOpenPopap(true)
  }
  return(
    <button onClick={() => setOpen(true)}>Личный кабинет</button>
  )
}

const mapDispatchToProps = {
  setIsOpenPopap
}

const Btn = connect(null, mapDispatchToProps)(BtnOpenPopap)

const HeaderMenu = ({
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
            <Btn />
          </Nav.Item>
        </Nav>
    )
}


export default HeaderMenu