import React from 'react';

import styles from './styles/instagram-feed.module.css';

/*CONSULTING, OUTSOURCING STAFF AUMENTATION */
export function InstagramFeed() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._container_header_insta}>
                    <div className={styles._circle}>
                        <img
                            alt={'fav-icon'}
                            className={styles._img}
                            src={
                                'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png'
                            }
                        />
                    </div>

                    <div className={styles._container_info_insta}>
                        <h2 className={styles._title}>Perfil de instagram</h2>
                        <p className={styles._subtitle}>168 publicaciones</p>
                    </div>

                    <a className={styles._btn_follow} href={'https://www.instagram.com/aicore.ok/'}>
                        Seguinos
                    </a>
                </div>

                <ul className={styles._container_images}>
                    {IMAGES_INSTAGRAM.map((item) => (
                        <li key={item.id} className={styles._list_image}>
                            <div className={styles._container_image}>
                                <div className={styles._div_padding} />
                                <img
                                    alt={item.alt}
                                    className={styles._image_insta}
                                    src={item.url}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const IMAGES_INSTAGRAM = [
    {
        id: 0,
        url: '/images/1.jpg',
        alt: 'imagen 1',
    },
    {
        id: 1,
        url: '/images/2.jpg',
        alt: 'imagen 2',
    },
    {
        id: 2,
        url: '/images/3.jpg',
        alt: 'imagen 3',
    },
    {
        id: 3,
        url: '/images/4.jpg',
        alt: 'imagen 4',
    },
    {
        id: 4,
        url: '/images/5.jpg',
        alt: 'imagen 5',
    },
    {
        id: 5,
        url: '/images/6.jpg',
        alt: 'imagen 6',
    },
    {
        id: 6,
        url: '/images/7.jpg',
        alt: 'imagen 7',
    },
    {
        id: 7,
        url: '/images/8.jpg',
        alt: 'imagen 8',
    },
];
