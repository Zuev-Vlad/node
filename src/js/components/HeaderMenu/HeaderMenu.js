import React from 'react'
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setContentPopap, setIsOpenPopap } from '../../redux/PopapReducer/actions';


const BtnOpenPopap = ({
  setIsOpenPopap,
  setContentPopap
}) => {
  
  const A = () => (<h1>Необходимо зарегистрироваться</h1>)

  const modalOpen = () => {
    setContentPopap(<A />)
    setIsOpenPopap(true)
  }
  return (
    <button onClick={() => modalOpen()}>Личный кабинет</button>
  )
}

const mapStateToProps = state => {
  return state.popap
}

const mapDispatchToProps = {
  setContentPopap,
  setIsOpenPopap
}

const Btn = connect(mapStateToProps, mapDispatchToProps)(BtnOpenPopap)

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