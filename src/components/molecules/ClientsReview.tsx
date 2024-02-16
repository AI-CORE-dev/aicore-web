import React from 'react';

import { CCLIENTS } from '@/helpers/consts';

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
                    {CCLIENTS.map((client) => (
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
