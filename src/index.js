import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import TaskList from "./components/taskList/TaskList";
import TestCArd from "./components/TestCArd";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskList/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();
