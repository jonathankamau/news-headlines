import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { loadSources } from './actions/sourceActions';

const store = configureStore();

store.dispatch(loadSources());

/*<Provider store={store}>
  <App />
</Provider>,*/
render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
