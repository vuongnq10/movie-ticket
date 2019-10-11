import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
if (typeof window !== 'undefined') {
  window.DEBUGstore = store;
}

export default store;
