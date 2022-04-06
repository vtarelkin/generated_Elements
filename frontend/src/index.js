import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {createRoot} from 'react-dom/client';

import rootReducer from './reducers/rootReducer';
import App from './App';

import './index.css';

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</React.StrictMode>);
