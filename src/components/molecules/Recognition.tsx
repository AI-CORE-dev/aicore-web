import React from 'react';

import { CNUMBERS } from '@/helpers/consts';

import styles from './styles/recognition.module.css';

export function Recognition() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>AI CORE en números</h2>

                <ul className={styles._unordered_list}>
                    {CNUMBERS.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <li className={styles._list_number}>
                                <span className={styles._title}>{item.title}</span>
                                <span className={styles._subtitle}>{item.subtitle}</span>
                            </li>
                            <li>
                                <img
                                    alt={item.img.alt}
                                    className={styles._image}
                                    src={item.img.image}
                                />
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    );
}
