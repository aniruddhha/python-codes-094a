import ReactDOM from 'react-dom/client';
import { Dash } from './dash/dash';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { Login } from './login/login';
import { Customers } from './admin/customers/customers';
import { Balance } from './customer/balance/balance';
import { Deposit } from './customer/deposit/deposit';
import { Withdraw } from './customer/withdraw/withdraw'
import { Transfer } from './customer/transfer/transfer'

import { AppCtx } from './ctx/appctx';
import { useState } from 'react';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  {
    path: '/dash',
    element: <Dash />,
    children: [
      { path: 'customers', element: <Customers /> },
      { path: 'balance', element: <Balance /> },
      { path: 'deposit', element: <Deposit /> },
      { path: 'withdraw', element: <Withdraw /> },
      { path: 'transfer', element: <Transfer /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {

  const [st, setSt] = useState({})

  const sharedObj = {
    st, setSt
  }

  return (
    <AppCtx.Provider value={sharedObj}>
      <RouterProvider router={router} />
    </AppCtx.Provider>
  )
}
root.render(
  <Main />
);


