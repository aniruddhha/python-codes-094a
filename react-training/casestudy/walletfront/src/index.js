import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import { Login } from './login/login'
import { Dash } from './customer/dash/dash';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Dash/>
);


