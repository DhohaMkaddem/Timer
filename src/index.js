import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestState from './components/TestState';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TestState />, document.getElementById('root'));


serviceWorker.unregister();
