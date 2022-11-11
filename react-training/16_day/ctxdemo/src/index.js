import React from 'react';
import ReactDOM from 'react-dom/client';
import { CtxParent } from './ctxdt';
import './index.css';
import { Modal } from './modal';
import { ParentComp } from './shrprps';

const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl);

root.render(
    <>
        <h1>Welcome to react</h1>
        <Modal/>
    </>
);


