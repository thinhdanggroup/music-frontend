import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/css/main.css';
import './styles/css/helper.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
