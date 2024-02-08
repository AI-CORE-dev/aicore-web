import React from 'react';

import styles from './styles/client-review.module.css';

export function ClientsReview() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2
                    className={styles._title}
                    style={{
                        color: '#000',
                    }}
                >
                    Nuestros clientes
                </h2>

                <ul className={styles._container_cards}>
                    {CLIENTS.map((client) => (
                        <li key={client.id}>
                            <div className={`${styles._card_client} ${styles._margin_right}`}>
                                <div className={styles._card_content}>
                                    <img
                                        alt={client.name}
                                        className={styles._avatar}
                                        src={client.avatar}
                                    />

                                    <p className={`${styles._name_client} ${styles._name_weight}`}>
                                        {client.name}
                                    </p>
                                    <p className={styles._description_client}>{client.job}</p>
                                    <p className={styles._description_client}>{client.company}</p>
                                    <p className={styles._review_card}>{client.review}</p>
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
        id: 0,
        name: 'Gonzalo Agüero',
        job: 'CEO - Founder',
        company: 'Worknmates',
        review: '"Siempre valoramos mucho es su involucramiento como usuarios de nuestra solución. Eso es fundamental porque obtenemos feedback de ellos, su visión sobre el negocio, su apoyo en cada momento del camino de llevar adelante una start up."',
        score: 5,
        avatar: '/cli_worknmates.svg',
    },
    {
        id: 1,
        name: 'Damian Schuchner',
        job: 'CEO - Founder',
        company: 'Bukest',
        review: '"Trabajamos codo a codo con AI CORE para poder reconvertirnos. Ellos fueron cruciales para nunca bajar los brazos y siempre que necesitábamos pivotear tener su apoyo tecnológico y humano."',
        score: 5,
        avatar: '/cli_bukest.svg',
    },

    {
        id: 2,
        name: 'Lorem Ipsum',
        job: 'CEO - Founder',
        company: 'Lorem',
        review: '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."',
        score: 5,
        avatar: 'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png',
    },
];
