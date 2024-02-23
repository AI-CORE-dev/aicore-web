import type { ReactNode } from 'react';

import React, { useEffect, useRef } from 'react';

import styles from './styles/modal-structure.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        const body = document.body;
        const scrollY = window.scrollY;

        if (isOpen) {
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}px`;
        } else {
            const scrollYValue = parseInt(body.style.top || '0');

            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, -scrollYValue);
        }

        return () => {
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, scrollY);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`${styles._modalOverlay} ${isOpen && styles._modalOpen}`}>
            <div className={styles._modalContent}>
                <button className={styles._closeButton} type={'button'} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
