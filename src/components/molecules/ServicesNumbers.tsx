import React from 'react';

import styles from './styles/services-number.module.css';

export function ServicesNumbers() {
    return (
        <section className={styles._section}>
            <ul className={styles._unordered_list}>
                {CNUMBERS.map((item) => (
                    <li key={item.id} className={styles._list_number}>
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
        id: 1,
        title: '+30',
        subtitle: 'Desarrolladores',
    },
    {
        id: 2,
        title: '1000',
        subtitle: 'Candidatos en nuestras bases',
    },
    {
        id: 3,
        title: '7 días',
        subtitle: 'Para sumar talentos en tu equpo',
    },
    {
        id: 4,
        title: '92%',
        subtitle: 'Sastisfacción de nuestros clientes',
    },
];
