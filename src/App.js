import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux'

import * as pages from './pages'
import * as routingPath from './routing-path'

import * as redux from './redux'
import configureStore from './store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
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
            <Route
              exact={true}
              path={routingPath.ALBUM}
              component={pages.Album} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}