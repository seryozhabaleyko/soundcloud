import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from '../reducers';

export const history = createBrowserHistory();

const configureStore = () => createStore(
    rootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware,
        ),
    ),
);

export default configureStore;