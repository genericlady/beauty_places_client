import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import manageBeautyPlace from './reducers/manageBeautyPlace'

const store = createStore(manageBeautyPlace)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
  registerServiceWorker();
};

export const renderer = { render };

store.dispatch({ type: '@@init' });
