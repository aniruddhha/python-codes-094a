import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Otp } from './features/otp/Otp';
import { Calc } from './features/calc/Calc';
import { MainContainer } from './menu';

function App() {
  return (
    <div className="App">
      <MainContainer/>
    </div>
  );
}

export default App;
