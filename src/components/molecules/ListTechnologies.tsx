import React from 'react';

import styles from './styles/list-technologies.module.css';

export function ListTechnologies() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Desarrollamos utilizando las últimas tecnologías:</h2>
                <ul className={styles._list}>
                    {CTECHNOLOGIES.map((technology) => (
                        <li key={technology.id} className={styles._item}>
                            <img alt={'Tecnología'} className={styles._img} src={technology.src} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const CTECHNOLOGIES = [
    {
        id: 0,
        src: '/tecnologias/amazon.svg',
    },
    {
        id: 1,
        src: '/tecnologias/angular.svg',
    },
    {
        id: 4,
        src: '/tecnologias/kotlin.svg',
    },
    {
        id: 5,
        src: '/tecnologias/mongoDB.svg',
    },
    {
        id: 2,
        src: '/tecnologias/azure.svg',
    },
    {
        id: 3,
        src: '/tecnologias/java.svg',
    },
    {
        id: 6,
        src: '/tecnologias/MySQL.svg',
    },
    {
        id: 7,
        src: '/tecnologias/nestjs.svg',
    },
    {
        id: 8,
        src: '/tecnologias/nodejs.svg',
    },
    {
        id: 9,
        src: '/tecnologias/PostgreSQL.svg',
    },
    {
        id: 10,
        src: '/tecnologias/python.svg',
    },
    {
        id: 11,
        src: '/tecnologias/react-native.svg',
    },
    {
        id: 12,
        src: '/tecnologias/react.svg',
    },
    {
        id: 14,
        src: '/tecnologias/scrum.svg',
    },
    {
        id: 15,
        src: '/tecnologias/swift.svg',
    },
];
