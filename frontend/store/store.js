import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';



export default (preloadedState = {}) => createStore(
  rootReducer, preloadedState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

















// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/root_reducer';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// const configureStore = (preloadedState = {}) => {
//     return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
// }

// export default configureStore;