import React from 'react'
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom'
import { ContentIndex } from './PageContent/ContentIndex';



export const App = () => {
    return (
      <Switch>
          <Route history={history} path='/' component={ContentIndex} />
      </Switch>
    )
}

ReactDOM.render(
  <React.StrictMode >

    <App />

  </React.StrictMode>,
  document.getElementById('app')
);