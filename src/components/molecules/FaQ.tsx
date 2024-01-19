'use client';

import React, { useState } from 'react';

import styles from './styles/FAQ.module.css';
interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface FAQState {
    activeItems: boolean[];
}

export function FaQ() {
    const [state, setState] = useState<FAQState>({
        activeItems: Array<boolean>(CFAQ.length).fill(false),
    });

    const handleClick = (index: number) => {
        setState((prevState) => {
            const newActiveItems: boolean[] = [...prevState.activeItems];

            newActiveItems[index] = !newActiveItems[index];

            return { ...prevState, activeItems: newActiveItems };
        });
    };

    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h4 className={styles._title}>Preguntas y respuestas</h4>
                {CFAQ.map((item, index) => (
                    <div key={item.id} className={styles._item} onClick={() => handleClick(index)}>
                        <div style={{ display: 'flex', margin: '25px 0' }}>
                            <div
                                className={
                                    state.activeItems[index]
                                        ? `${styles._container_icon} ${styles._container_icon_open}`
                                        : styles._container_icon
                                }
                            >
                                <svg
                                    className={styles._icon}
                                    fill={'none'}
                                    height={'36'}
                                    viewBox={'0 0 36 36'}
                                    width={'36'}
                                >
                                    <path
                                        clipRule={'evenodd'}
                                        d={
                                            'M24 19H19V24C19 24.55 18.55 25 18 25C17.45 25 17 24.55 17 24V19H12C11.45 19 11 18.55 11 18C11 17.45 11.45 17 12 17H17V12C17 11.45 17.45 11 18 11C18.55 11 19 11.45 19 12V17H24C24.55 17 25 17.45 25 18C25 18.55 24.55 19 24 19Z'
                                        }
                                        fill={'#AFB2B8'}
                                        fillRule={'evenodd'}
                                    />
                                </svg>
                            </div>
                            <div className={styles._question}>{item.question}</div>
                        </div>
                        {state.activeItems[index] ? (
                            <div>
                                <p className={styles._answer}>{item.answer}</p>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
}

const CFAQ: FAQItem[] = [
    {
        id: 0,
        question: '¿Qué es Netflix?',
        answer: 'Netflix es un servicio de transmisión que ofrece una amplia variedad de programas de televisión, películas, anime, documentales y más en miles de dispositivos conectados a Internet.',
    },
    {
        id: 1,
        question: '¿Qué es Amazon?',
        answer: 'Amazon es una empresa multinacional de tecnología y comercio electrónico con sede en Seattle, Washington.',
    },
    {
        id: 2,
        question: '¿Qué es Spotify?',
        answer: 'Spotify es un servicio de transmisión de música digital que te brinda acceso a millones de canciones, podcasts y videos de artistas de todo el mundo.',
    },
    {
        id: 3,
        question: '¿Qué es Netflix?',
        answer: 'Netflix es un servicio de transmisión que ofrece una amplia variedad de programas de televisión, películas, anime, documentales y más en miles de dispositivos conectados a Internet.',
    },
    {
        id: 4,
        question: '¿Qué es Amazon?',
        answer: 'Amazon es una empresa multinacional de tecnología y comercio electrónico con sede en Seattle, Washington.',
    },
];
