import React from 'react';

import styles from './styles/services-number.module.css';

interface IProps {
    CNUMBERS: {
        id: number;
        title: string;
        subtitle: string;
    }[];
}

export function ServicesNumbers({ CNUMBERS }: IProps) {
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
