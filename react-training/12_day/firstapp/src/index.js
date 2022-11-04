import React from 'react';
import ReactDOM from 'react-dom/client';

const dv = document.getElementById('root')

const root = ReactDOM.createRoot(dv);
const color  = 'yellow'

const dvSt = {
  boder : '1px solid red',
  color : 'red'
}

const uiAni =  (
  <div style={dvSt} >
    <h1>Welcome to react, Good One {color.toUpperCase()}</h1>
  </div>
)

root.render(uiAni);


