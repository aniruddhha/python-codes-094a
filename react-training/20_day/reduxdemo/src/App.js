import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Otp } from './features/otp/Otp';
import { Calc } from './features/calc/Calc';
import { ApiTable } from './features/table/ApiTable';

function App() {
  return (
    <div className="App">
    <ApiTable/>
    </div>
  );
}

export default App;
