import * as React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setContentPopap, setIsOpenPopap, setIsShowFooterPopap, setTitlePopap, TSetContentPopap, TSetIsOpenPopap, TSetIsShowFooterPopap, TSetTitlePopap } from '../../redux/PopapReducer/actions'
import { IRootReducerState } from '../../redux/rootReducer'
import { IMenuItem } from '../../redux/SettingsReducer/actions'
import { IStateSettings } from '../../redux/SettingsReducer/SettingsReducer'
import { AuthContentPopap } from '../Auth/AuthContentPopap/AuthContentPopap'
import { Link } from 'react-router-dom'

interface IHeaderMenu {
  setIsOpenPopap?: TSetIsOpenPopap
  setContentPopap?: TSetContentPopap
  setTitlePopap?:TSetTitlePopap
  setIsShowFooterPopap?:TSetIsShowFooterPopap
  settings?: IStateSettings
}

export const headerMenu = ({
  setIsOpenPopap,
  setContentPopap,
  setTitlePopap,
  setIsShowFooterPopap,
  settings
}: IHeaderMenu): JSX.Element => {

  const testMenu = [{
    name: "About",
    href: '#'
  }]

  const openAuthPopap = () => {
    setTitlePopap('Авторизация')
    setContentPopap(<AuthContentPopap />)
    setIsOpenPopap(true)
    setIsShowFooterPopap(false)
  }

  return (
    <React.Fragment>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="my-auto ml-auto">
          
          {settings.mainMenu.map((item: IMenuItem, key) => (
            <Link key={key} className="nav-link" to={item.url}>{item.title}</Link>
          ))}

        </Nav>
        <button className="btn btn-bright ml-lg-3" onClick={openAuthPopap}>войти</button>
      </Navbar.Collapse>

    </React.Fragment>
  )
}

const mapStateToProps = (state: IRootReducerState) => state
const mapDispatchState = {
  setIsOpenPopap,
  setContentPopap,
  setTitlePopap,
  setIsShowFooterPopap,
}


export const HeaderMenu = connect(mapStateToProps, mapDispatchState)(headerMenu)