import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/Footer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  [<App key="1" />, <Footer key="2" />],
  document.getElementById('root'),
);
registerServiceWorker();
