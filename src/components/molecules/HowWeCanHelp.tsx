import React from 'react';

import styles from './styles/how-we-can-help.module.css';

interface IProps {
    title: string;
    subtitle?: string;
    cards: {
        id: number;
        title: string;
        image: string;
        subtitle?: string;
        redirection?: string;
    }[];
}

export function HowWeCanHelp({ title, subtitle, cards }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._container_text}>
                    <h2 className={styles._title_help}>{title}</h2>
                    <p className={styles._subtitle_help}>{subtitle}</p>
                </div>

                <ul className={styles._list_help}>
                    {cards.map((aid) => (
                        <li key={aid.id} className={styles._item_list}>
                            <a className={styles._container_card} href={aid.redirection}>
                                <span className={styles._container_image}>
                                    <img
                                        alt={aid.title}
                                        className={styles._image}
                                        src={aid.image}
                                    />
                                </span>

                                <h3 className={styles._title_card}>{aid.title}</h3>
                                <p className={styles._subtitle_card}>{aid.subtitle}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
