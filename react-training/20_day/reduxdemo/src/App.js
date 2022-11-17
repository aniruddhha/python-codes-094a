import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Otp } from './features/otp/Otp';
import { Calc } from './features/calc/Calc';

function App() {
  return (
    <div className="App">
    <Calc/>
    </div>
  );
}

export default App;
