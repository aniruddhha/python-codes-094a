import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundry } from './errbndr';
import './index.css';
import { RefDemo } from './refsdemo';
import { Animal, Main, Car } from './rndprp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  {/* <ErrorBoundry>
    <RefDemo num1='abc' num2='pqr'/>
  </ErrorBoundry>
  <h1>Hey Hi</h1> */}

  <Main render={ () => <Animal/> }/>
  <Main render={ () => <Car/> }/>

</>
);


