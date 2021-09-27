import * as React from 'react'
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
// import * as HeaderMenu from '../../../../node/src/js/components/HeaderMenu/HeaderMenu';


interface IHeaderMenu {
  mainMenu?: Array<any>
}

const headerMenu = ({
  mainMenu
}: IHeaderMenu): JSX.Element => {
  
  return (
    <Nav variant="pills" defaultActiveKey="/home">

    </Nav>
  )
}

const mapStateToProps = (state: any) => state

export const HeaderMenu = connect(mapStateToProps, null)(headerMenu)