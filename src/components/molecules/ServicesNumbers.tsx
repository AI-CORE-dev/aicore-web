import React from 'react';

import styles from './styles/services-number.module.css';

export function ServicesNumbers() {
    return (
        <section className={styles._section}>
            <ul className={styles._unordered_list}>
                {CNUMBERS.map((item, index) => (
                    <li key={index} className={styles._list_number}>
                        <span className={styles._title}>{item.title}</span>
                        <span className={styles._subtitle}>{item.subtitle}</span>
                    </li>
                ))}
            </ul>
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
