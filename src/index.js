import React from 'react';
import ReactDOM from 'react-dom';

import MyRouter from './router/router'

import './assets/css/common.less'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyRouter />, document.getElementById('root'));

registerServiceWorker();