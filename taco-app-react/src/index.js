import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowseRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowseRouter>
    <App />
  </BrowseRouter>, document.getElementById('root'));
registerServiceWorker();
