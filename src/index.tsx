import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18nextConf';

// Old imports for morphing SVG------------------------------------------------
//      Had to reinstall deprecated packages : 
//      ["popmotion", "@emotion/core", "react-pose", "react-app-polyfill"]
import 'react-app-polyfill/ie11';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';
// ----------------------------------------------------------------------------

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
