import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux'

import * as pages from './pages'
import * as routingPath from './routing-path'

import * as redux from './redux'

export default class App extends Component {
  render() {
    return (
      <Provider store={redux.store}>
        <BrowserRouter>
          <Switch>
            <Route
              exact={true}
              path={routingPath.MAIN_PAGE}
              component={pages.Main} />
            <Route
              exact={true}
              path={routingPath.BAI_HAT}
              component={pages.BaiHat} />
            <Route
              exact={true}
              path={routingPath.CA_NHAN}
              component={pages.CaNhan} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}