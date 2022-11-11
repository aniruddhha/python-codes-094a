import React from 'react';
import ReactDOM from 'react-dom/client';
import { CtxParent } from './ctxdt';
import './index.css';
import { Modal } from './modal';
import { ParentComp } from './shrprps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1>Welcome to react</h1>
        <Modal/>
    </>
);


