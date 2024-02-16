'use client';

import type { MouseEventHandler } from 'react';

import {
    EmotionValue1,
    EmotionValue2,
    EmotionValue3,
    EmotionValue4,
    EmotionValue5,
} from '@/assets/svg/rating';
import { CVALUES } from '@/helpers/consts';

import styles from './styles/article-body.module.css';

export function ArticleBody() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div>
                    <div className={styles._text_time}>14 min</div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <button className={styles._btn} type={'button'}>
                                <span
                                    className={`${styles._share_module} ${styles._share_module_fb}`}
                                />
                            </button>
                            <button className={styles._btn} type={'button'}>
                                <span
                                    className={`${styles._share_module} ${styles._share_module_li}`}
                                />
                            </button>
                            <button className={styles._btn} type={'button'}>
                                {' '}
                                <span
                                    className={`${styles._share_module} ${styles._share_module_tw}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles._container_text}>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <h2 className={styles._text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </h2>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <h2 className={styles._text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </h2>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <h2 className={styles._text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </h2>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga
                        in quos, architecto numquam expedita veniam recusandae cum nulla
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                    <p className={styles._text}>
                        reprehenderit sunt asperiores odit? Obcaecati fuga non veniam amet? Illum,
                        molestias!
                    </p>
                </div>
            </div>

            <div className={styles._banner}>
                <p className={styles._text_banner}>
                    Unde alias mollitia, perferendis dicta cum praesentium voluptate odio eaque.
                </p>
                <h2 className={styles._title_banner}>Lorem ipsum dolor sit.</h2>
                <a className={styles._btn_banner} href={'/contact'}>
                    Contactanos
                </a>
            </div>

            <div className={styles._container_reviews}>
                <div style={{ display: 'flex' }}>
                    <div className={styles._circle_rating}>4.2</div>
                    <div>
                        <div className={styles._title_rating}>
                            Gracias por leer, dejanos tu opinion
                        </div>
                        <div className={styles._rating}>3985 opiniones</div>
                    </div>
                </div>

                <div>
                    {CVALUES.map((item) => {
                        const renderEmotion = (item: number, act: boolean) => {
                            switch (item) {
                                case 0:
                                    return <EmotionValue1 active={act} />;

                                case 1:
                                    return <EmotionValue2 active={act} />;

                                case 2:
                                    return <EmotionValue3 active={act} />;

                                case 3:
                                    return <EmotionValue4 active={act} />;

                                case 4:
                                    return <EmotionValue5 active={act} />;

                                default:
                                    break;
                            }
                        };

                        const handleClick = (id: number): MouseEventHandler<HTMLButtonElement> => {
                            return () => {
                                CVALUES.forEach((item) => {
                                    if (item.id === id) {
                                        item.active = true;
                                    } else {
                                        item.active = false;
                                    }
                                });
                            };
                        };

                        return (
                            <button
                                key={item.id}
                                className={styles._btn_emotion}
                                type={'button'}
                                onClick={handleClick(item.id)}
                            >
                                {renderEmotion(item.id, item.active)}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
