import React from 'react';

import styles from './styles/institutional-photos.module.css';

export function InstitutionalPhotos() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <img
                    alt={'institutional_1'}
                    className={styles._img}
                    src={'./carrers/aicore_collage.svg'}
                />
            </div>
        </section>
    );
}

const CPHOTOS = [
    {
        id: 0,
        alt: 'institutional_1',
        src: './carrers/1.jpg',
    },
    {
        id: 1,
        alt: 'institutional_2',
        src: './carrers/2.jpg',
    },
    {
        id: 2,
        alt: 'institutional_3',
        src: './carrers/3.jpg',
    },
    {
        id: 3,
        alt: 'institutional_4',
        src: './carrers/4.jpg',
    },
    {
        id: 4,
        alt: 'institutional_5',
        src: './carrers/5.jpg',
    },
    {
        id: 5,
        alt: 'institutional_6',
        src: './carrers/6.jpg',
    },
    {
        id: 6,
        alt: 'institutional_7',
        src: './carrers/7.jpg',
    },
];
