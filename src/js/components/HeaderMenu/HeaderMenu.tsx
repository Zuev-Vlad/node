import * as React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
// import * as HeaderMenu from '../../../../node/src/js/components/HeaderMenu/HeaderMenu';


interface IHeaderMenu {
  mainMenu?: Array<any>
}

const headerMenu = ({
  mainMenu = [{
    name: "About",
    href: '#'
  }]
}: IHeaderMenu): JSX.Element => {


  const testMenu = [{
    name: "About",
    href: '#'
  }]

  return (
    <React.Fragment>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="my-auto ml-auto">
          
          {testMenu.map((item, key) => {
            return  <Nav.Link key={key} href={item.href}>{item.name}</Nav.Link>
          })}
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <button className="btn btn-bright ml-lg-3">войти</button>
      </Navbar.Collapse>
    </React.Fragment>
  )
}

const mapStateToProps = (state: any) => state.menu

export const HeaderMenu = connect(mapStateToProps, null)(headerMenu)