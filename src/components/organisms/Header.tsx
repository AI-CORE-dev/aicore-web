'use client';

import React, { useEffect, useState } from 'react';

import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import { handleScroll } from '@/helpers/handleScrolSchedule';

import styles from './styles/header.module.css';
interface IProps {
    title?: string;
    subtitle?: string;
    textButton?: string;
    textButtonSecondary?: string;
}

export function Header({
    title = 'Lorem ipsum',
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    textButton = 'textButton',
    textButtonSecondary = 'textButtonSecondary',
}: IProps) {
    const { scrolled } = useScrollNavbar();

    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        // Agregar un pequeño retraso para permitir que la animación se muestre cuando se carga la página
        const timeout = setTimeout(() => {
            setShowAnimation(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <header className={`${styles._header} ${showAnimation ? styles.show_animation : ''}`}>
            <div className={styles._header_module}>
                <div className={styles._container_texts}>
                    <h1 className={styles._title}>{title}</h1>
                    <h3 className={styles._subtitle}>{subtitle}</h3>
                    <div className={styles._div_contact_box}>
                        <button className={styles._btn_call} type={'button'} onClick={handleScroll}>
                            {textButton}
                        </button>
                        <p className={styles._text_description}>{textButtonSecondary}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
