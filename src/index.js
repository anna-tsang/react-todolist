import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoReducer from "./reducer/ToDoReducer";

const toDoStore = createStore(ToDoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
      <Provider store = {toDoStore}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
