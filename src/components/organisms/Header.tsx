import React from 'react';

import styles from './styles/header.module.css';
import { WaveCanvas } from './components/WaveCanvas';

interface IProps {
    isVideo?: boolean;
    title?: string;
    subtitle?: string;
    textButton?: string;
    isButtonSecondary?: boolean;
    textButtonSecondary?: string;
    isHome?: boolean;
}

export function Header({
    isVideo = false,
    title = 'Title',
    subtitle = 'subtitle',
    textButton = 'textButton',
    isButtonSecondary = false,
    textButtonSecondary = 'textButtonSecondary',
    isHome = false,
}: IProps) {
    return (
        <header
            className={isHome ? styles._header_home : `${styles._header}`}
            style={{ backgroundColor: !isVideo ? '#1E1E1E' : 'transparent' }}
        >
            <div className={styles._header_module}>
                <video autoPlay loop muted playsInline className={styles._video_background}>
                    <source src={'/video_aicore.mp4'} type={'video/mp4'} />
                </video>

                <div className={styles._container_texts}>
                    <h1 className={styles._title}>{title}</h1>
                    <h3 className={styles._subtitle}>{subtitle}</h3>
                    <div className={styles._div_contact_box}>
                        <button className={styles._btn_white}>{textButton}</button>
                        {isButtonSecondary ? (
                            <button className={styles._btn_call}>{textButtonSecondary}</button>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
}
