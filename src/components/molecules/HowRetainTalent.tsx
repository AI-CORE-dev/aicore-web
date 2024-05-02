import React from 'react';

import styles from './styles/how-retain-talent.module.css';

interface IProps {
    CARDS: {
        id: number;
        title: string;
        img: string;
        text: string;
    }[];
    title: string;
    isTitle?: boolean;
}

export function HowRetainTalent({ CARDS, title, isTitle = true }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                {isTitle ? <h2 className={styles._title}>{title}</h2> : null}
                <ul className={styles._ul}>
                    {CARDS.map((card) => (
                        <li
                            key={card.id}
                            className={styles._card}
                            style={{
                                alignItems: isTitle ? 'flex-start' : 'center',
                            }}
                        >
                            <div className={styles._card_image}>
                                <img alt={card.title} className={styles._img} src={card.img} />
                            </div>
                            <div className={styles._card_content}>
                                <p className={styles._card_title}>{card.title}</p>
                                <p className={styles._card_text}>{card.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
