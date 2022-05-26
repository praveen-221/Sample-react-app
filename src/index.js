import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App.js';

function Website() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDom.render(<Website />, document.getElementById('root'));
