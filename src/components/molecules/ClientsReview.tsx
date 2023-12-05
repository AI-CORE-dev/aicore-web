import React from 'react';
import Image from 'next/image';

import { StartReviewSVG } from '@/assets/svg';

import styles from './styles/client-review.module.css';

export function ClientsReview() {
    return (
        <section className={styles._section}>
            <div
                style={{
                    width: '100%',
                }}
            >
                <h2
                    className={styles._title}
                    style={{
                        color: '#000',
                    }}
                >
                    Nuestros clientes
                </h2>

                <ul className={styles._container_cards}>
                    {CLIENTS.map((client, index) => (
                        <li key={index}>
                            <div className={`${styles._card_client} ${styles['_margin-right']}`}>
                                <div className={styles._card_content}>
                                    <Image
                                        alt={client.name}
                                        height={140}
                                        src={client.avatar}
                                        width={140}
                                    />

                                    <p className={`${styles._name_client} ${styles._name_weight}`}>
                                        {client.name}
                                    </p>
                                    <p className={styles._name_client}>{client.job}</p>
                                    <p className={styles._name_client}>{client.company}</p>
                                    <p className={styles._review_card}>{client.review}</p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span className={styles['_value-review']}>5.0</span>
                                        <StartReviewSVG />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const CLIENTS = [
    {
        name: 'Gonzalo Agüero',
        job: 'CEO - Founder',
        company: 'Worknmates',
        review: 'Siempre valoramos mucho es su involucramiento como usuarios de nuestra solución. Eso es fundamental porque obtenemos feedback de ellos, su visión sobre el negocio, su apoyo en cada momento del camino de llevar adelante una start up.',
        score: 5,
        avatar: '/cli_worknmates.svg',
    },
    {
        name: 'Damian Schuchner',
        job: 'CEO - Founder',
        company: 'Bukest',
        review: 'Trabajamos codo a codo con AI CORE para poder reconvertirnos. Ellos fueron cruciales para nunca bajar los brazos y siempre que necesitábamos pivotear tener su apoyo tecnológico y humano.',
        score: 5,
        avatar: '/cli_bukest.svg',
    },
];