import React from 'react';

import { CINFOFOUNDERS } from '@/helpers/consts';

import styles from './styles/get-to-know-us-better.module.css';

export function GetToKnowUsBetter() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._text}>Conocenos Mejor</h2>
                <ul className={styles._list_container_articles}>
                    {CINFOFOUNDERS.map((item) => (
                        <li key={item.id} className={styles._container_article}>
                            <article className={styles._article}>
                                <div className={styles._container_image}>
                                    <img
                                        alt={item.name}
                                        className={styles._image}
                                        src={item.image}
                                    />
                                </div>
                                <div className={styles._info_container}>
                                    <p className={styles._title}>{item.name}</p>
                                    <p className={`${styles._title} ${styles._position}`}>
                                        {item.position} {item.employment}
                                    </p>

                                    <a className={styles._linkedin} href={item.linkedin}>
                                        Linkedin
                                    </a>
                                    <div className={styles._image_container} />
                                    <div>
                                        <p className={styles._ask}>{item.ask}</p>
                                        <p className={styles._answer}>{item.answer}</p>
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
