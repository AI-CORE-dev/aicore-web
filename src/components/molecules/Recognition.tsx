import React from 'react';

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

const CAWARDS = [
    {
        id: 0,
        image: '/1.svg',
        alt: 'award1',
    },
    {
        id: 1,
        image: '/2.svg',
        alt: 'award2',
    },
    {
        id: 2,
        image: '/3.svg',
        alt: 'award3',
    },
    {
        id: 3,
        image: '/4.svg',
        alt: 'award4',
    },
    {
        id: 4,
        image: '/5.svg',
        alt: 'award5',
    },
];
