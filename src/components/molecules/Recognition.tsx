import React from 'react';

import { CAWARDS } from '@/helpers/consts';

import styles from './styles/recognition.module.css';

export function Recognition() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Reconocimientos</h2>

                <ul className={styles._unordered_list}>
                    {CNUMBERS.map((item) => (
                        <li key={item.id} className={styles._list_number}>
                            <span className={styles._title}>{item.title}</span>
                            <span className={styles._subtitle}>{item.subtitle}</span>
                        </li>
                    ))}
                </ul>

                <ul className={styles._unordered_list}>
                    {CAWARDS.map((item) => (
                        <li key={item.id} className={styles._list_number}>
                            <img alt={item.alt} className={styles._image} src={item.image} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const CNUMBERS = [
    {
        id: 0,
        title: '+30',
        subtitle: 'Desarrolladores',
    },
    {
        id: 1,
        title: '+40',
        subtitle: 'Proyectos realizados',
    },
    {
        id: 2,
        title: '15',
        subtitle: 'Años de experiencia IT',
    },
    {
        id: 3,
        title: '60%',
        subtitle: 'De staff senior',
    },
];
