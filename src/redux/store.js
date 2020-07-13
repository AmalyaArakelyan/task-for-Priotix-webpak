import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from "./RootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer ,syncHistoryWithStore} from "react-router-redux";
import { combineReducers } from 'redux';

const store = createStore(
    combineReducers({
        ...rootReducer,
        routing: routerReducer}),
    composeWithDevTools(
    applyMiddleware(thunk)
));

const hashHistory = createBrowserHistory();
const history = syncHistoryWithStore(hashHistory, store);

export {store , history}


