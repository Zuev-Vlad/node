import React from 'react'
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

// redux
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
// component
import { ContentAuth } from './PageContent/ContentAuth';
import { ContentIndex } from './PageContent/ContentIndex';
import { ContentPersonal } from './PageContent/ContentPersonal';
import HeaderMenu  from './components/HeaderMenu/HeaderMenu';
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import Popap from './components/Popap/Popap';
import '../less/common.less';


const APP_STORE = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export const App = () => {
    return (
      <Provider store={APP_STORE}>
      <header>
        <HeaderMenu />
      </header>
          <BrowserRouter>
            <Switch>
                <Route exact  path='/' component={ContentIndex} />
                <Route path='/auth/' component={ContentAuth} />
                <Route path='/personal' component={ContentPersonal} />
            </Switch>
          </BrowserRouter>
          <Popap />
          </Provider>
    )
}

ReactDOM.render(
  <React.StrictMode >

    <App />

  </React.StrictMode>,
  document.getElementById('app')
);