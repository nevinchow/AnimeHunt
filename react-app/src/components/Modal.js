import React from 'react';
import './Modal.css';
import ReactDom from 'react-dom';
import { useModal } from '../context/Modal';
import './Modal.css';

export default function Modal() {
    const { isOpen, closeModal, modalContent } = useModal();
    if (!isOpen) return null
    return ReactDom.createPortal(
        <>
            <div onClick={closeModal} className="modal-overlay">
                <div className="modal-styles" onClick={(e) => e.stopPropagation()}>
                    {modalContent}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
