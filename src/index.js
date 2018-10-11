import React from 'react';
import ReactDOM from 'react-dom';
import Contax from './Contax';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import contaxReducers from './redux/reducers'

const store = createStore(
    contaxReducers,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Contax />
    </Provider>,
    document.getElementById('root')
);
