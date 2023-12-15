import React from 'react';

import { VideoPlayer } from '../modals/VideoPlayer';

import styles from './styles/open-positions.module.css';

export function OpenPositions() {
    const youtubeVideoId = '657b3f96';

    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div
                    style={{
                        padding: '40px 40px 40px 40px',
                    }}
                >
                    <h2 className={styles._title}>Posiciones abiertas para aplicar</h2>
                    <ul className={styles._list_positions}>
                        <li className={styles._list_item}>
                            <div>
                                <p className={styles._name_position}>JR Business Analyst</p>
                                <p className={styles._name_position_short}>JR BA</p>
                                <div className={styles._info}>
                                    <div className={styles._container_row}>
                                        <svg
                                            fill={'none'}
                                            height={'12'}
                                            viewBox={'0 0 12 12'}
                                            width={'12'}
                                        >
                                            <path
                                                clipRule={'evenodd'}
                                                d={
                                                    'M5 8H1C0.487164 8 0.0644928 7.61396 0.00672773 7.11662L0 7V1C0 0.487164 0.38604 0.0644928 0.883379 0.00672773L1 0H11C11.5128 0 11.9355 0.38604 11.9933 0.883379L12 1V7C12 7.51284 11.614 7.93551 11.1166 7.99327L11 8H7V10H9C9.55229 10 10 10.4477 10 11C10 11.5523 9.55229 12 9 12H3C2.44772 12 2 11.5523 2 11C2 10.4477 2.44772 10 3 10H5V8Z'
                                                }
                                                fill={'#AFB2B8'}
                                                fillRule={'evenodd'}
                                            />
                                        </svg>
                                        <ul style={{ maxWidth: '250px', marginRight: '35px' }}>
                                            <li style={{ color: 'var(--black-color)' }}>
                                                +2 años de experiencia
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles._container_row}>
                                        <svg
                                            fill={'none'}
                                            height={'16'}
                                            viewBox={'0 0 16 16'}
                                            width={'16'}
                                        >
                                            <path
                                                clipRule={'evenodd'}
                                                d={
                                                    'M8 2C10.7536 2 13 4.37767 13 7.32845C13 9.04361 11.5134 11.2084 8.31488 13.7526L8 14C4.58408 11.3485 3 9.09894 3 7.32845C3 4.37767 5.24638 2 8 2ZM8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5Z'
                                                }
                                                fill={'#AFB2B8'}
                                                fillRule={'evenodd'}
                                            />
                                        </svg>
                                        <ul>
                                            <li style={{ color: 'var(--black-color)' }}>
                                                Argentina - Remoto
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div />
                        </li>
                    </ul>
                </div>
                <VideoPlayer isLocal />
            </div>
        </section>
    );
}
