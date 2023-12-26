import React from 'react';

import styles from './styles/recognition.module.css';

export function Recognition() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Reconocimientos</h2>

                <ul className={styles._unordered_list}>
                    {CNUMBERS.map((item, index) => (
                        <li key={index} className={styles._list_number}>
                            <span className={styles._title}>{item.title}</span>
                            <span className={styles._subtitle}>{item.subtitle}</span>
                        </li>
                    ))}
                </ul>

                <ul className={styles._unordered_list}>
                    {CAWARDS.map((item, index) => (
                        <li key={index} className={styles._list_number}>
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
        title: '+30',
        subtitle: 'Desarrolladores',
    },
    {
        title: '1000',
        subtitle: 'Candidatos en nuestras bases',
    },
    {
        title: '7-15 días',
        subtitle: 'Para sumar talentos en tu equpo',
    },
    {
        title: '92%',
        subtitle: 'Sastisfacción de nuestros clientes',
    },
];

const CAWARDS = [
    {
        image: '/1.svg',
        alt: 'award1',
    },
    {
        image: '/2.svg',
        alt: 'award2',
    },
    {
        image: '/3.svg',
        alt: 'award3',
    },
    {
        image: '/4.svg',
        alt: 'award4',
    },
    {
        image: '/5.svg',
        alt: 'award5',
    },
];
