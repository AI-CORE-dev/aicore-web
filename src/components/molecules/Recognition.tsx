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
                        <li key={item.id} className={styles._list_number}>
                            <span className={styles._title}>{item.title}</span>
                            <span className={styles._subtitle}>{item.subtitle}</span>

                            <img
                                alt={item.img.alt}
                                className={styles._image}
                                src={item.img.image}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
