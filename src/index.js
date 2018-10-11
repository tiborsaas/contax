import React from 'react';
import ReactDOM from 'react-dom';
import Contax from './Contax';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import contaxReducers from './redux/reducers'

const store = createStore(contaxReducers);

ReactDOM.render(
    <Provider store={store}>
        <Contax />
    </Provider>,
    document.getElementById('root')
);
