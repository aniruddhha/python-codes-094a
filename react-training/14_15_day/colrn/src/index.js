import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ColorPicker } from './colpick/ColorPicker';
import { UsEf } from './usef/UsEf';
import { App } from './hoc/hoc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App/>
);
