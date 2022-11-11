import sty from './modal.module.css'
import PortalReactDOM from 'react-dom'

export function Backdrop() {
    return (
        <div className={sty.backdrop}>

        </div>
    )
}

export function ModalData() {
    return (
        <div className={sty.modal}>
            <h1> Hey Hi , I am modal</h1>
        </div>
    )
}

const modalDv = document.getElementById('modal')
const prtlBkdp = PortalReactDOM.createPortal(<Backdrop/>, modalDv) 
const prtlMdlDt = PortalReactDOM.createPortal( <ModalData/>, modalDv) 

export function Modal() {
    return(
        <div>
           {prtlBkdp}
           {prtlMdlDt}
        </div>
    )
}