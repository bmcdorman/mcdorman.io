import * as React from 'react';

import { render } from 'react-dom';

import { Provider as StyleProvider } from 'styletron-react';
import { Client } from 'styletron-engine-atomic';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import history from './history';
import store from './store';
import StaticResumePage from './pages/StaticResumePage';
import { Route, Switch } from 'react-router';

const root = document.getElementById('root');

const engine = new Client();

render((
  <StyleProvider value={engine}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/static_resume' component={StaticResumePage} />
          <Route component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </StyleProvider>
), root);