import React from 'react'
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import HeaderMenu from '../../../../node/src/js/components/HeaderMenu/HeaderMenu';




const mapStateToProps = state => {
  return state.menu
}

const mapDispatchToProps = {

}



const headerMenu = ({
  mainMenu
}) => {
  console.log({ mainMenu })
  return (
    <Nav variant="pills" defaultActiveKey="/home">

    </Nav>
  )
}


export const HeaderMenu = () => connect(mapStateToProps, mapDispatchToProps)(headerMenu)