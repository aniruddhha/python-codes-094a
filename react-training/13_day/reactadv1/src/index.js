import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Car } from './car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Car name='abc' make='pqr' model='123' price='12' >
      <h1> This is projected data </h1>
    </Car>
    <Car name='lmn' make='qwe' model='234' price='90' ></Car>
    <Item age='12' sal='23'/>
  </>
);

