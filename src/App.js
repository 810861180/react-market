import React, { Fragment } from 'react';
import {Switch, BrowserRouter} from 'react-router-dom'
import FrontendAuth from './routes/FrontendAuth' // 路由守卫
import routerForm from './routes/index' // 路由表


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <FrontendAuth routerConfig={routerForm} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App

