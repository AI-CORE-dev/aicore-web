'use client';

import { useState } from 'react';

import styles from './styles/FAQ.module.css';

export function FaQ() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <section>
            <div>
                <h4>FAQ</h4>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                            className={
                                active
                                    ? `${styles._container_icon} ${styles._container_icon_open}`
                                    : `${styles._container_icon}`
                            }
                            onClick={handleClick}
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
                        <div>What is Node.js, and why is it suitable for web development?</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const CFAQ = [
    {
        id: 0,
        question: 'What is Netflix?',
        answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
];
