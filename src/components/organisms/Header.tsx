'use client';

import React from 'react';

import { useScrollNavbar } from '@/hooks/useScrollNavbar';

import styles from './styles/header.module.css';
interface IProps {
    isVideo?: boolean;
    title?: string;
    subtitle?: string;
    isButtonPrimary?: boolean;
    textButton?: string;
    isButtonSecondary?: boolean;
    textButtonSecondary?: string;
    isHome?: boolean;
}

export function Header({
    isVideo = false,
    title = 'Lorem ipsum',
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isButtonPrimary = true,
    textButton = 'textButton',
    isButtonSecondary = false,
    textButtonSecondary = 'textButtonSecondary',
}: IProps) {
    const { scrolled } = useScrollNavbar();

    return (
        <header
            className={styles._header}
            style={{ backgroundColor: !isVideo ? '#1E1E1E' : 'transparent' }}
        >
            <div className={styles._header_module}>
                <div className={styles._container_texts}>
                    <h1 className={styles._title}>{title}</h1>
                    <h3 className={styles._subtitle}>{subtitle}</h3>
                    <div className={styles._div_contact_box}>
                        {isButtonPrimary ? (
                            <a
                                className={
                                    scrolled
                                        ? `${styles._btn_call} ${styles._btn_call_hvr}`
                                        : styles._btn_call
                                }
                                href={'/contact'}
                            >
                                {textButton}
                            </a>
                        ) : null}
                        {isButtonSecondary ? (
                            <p
                                className={styles._text_description}
                                /*
                                 href={'https://calendly.com/emiliano-caceres/test'}
                                rel={'noopener noreferrer'}
                                target={'_blank'}
                                */
                            >
                                {textButtonSecondary}
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
}
