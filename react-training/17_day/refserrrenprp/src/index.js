import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundry } from './errbndr';
import './index.css';
import { RefDemo } from './refsdemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundry>
    <RefDemo/>
    <h1>Hey Hi</h1>
  </ErrorBoundry>
);


