import * as React from 'react';

import { render } from 'react-dom';

import { Provider as StyleProvider } from 'styletron-react';
import { Client } from 'styletron-engine-atomic';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import history from './history';
import store from './store';

const root = document.getElementById('root');

const engine = new Client();

render((
  <StyleProvider value={engine}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </StyleProvider>
), root);