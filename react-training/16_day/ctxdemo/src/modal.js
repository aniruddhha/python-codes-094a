import sty from './modal.module.css'

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

export function Modal() {
    return(
        <div>
            <Backdrop/>
            <ModalData/>
        </div>
    )
}