'use client';

import React, { useState } from 'react';

import { StartReviewSVG } from '../../assets/svg/StartReview';

import styles from './styles/carrousel-review-client.module.css';

export function CarouselReviewClient() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cambia 3 al número de elementos en tu carrusel
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Cambia 3 al número de elementos en tu carrusel
    };

    return (
        <div className={styles.carousel}>
            <div
                className={styles.slides}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {CCLIENTREVIEWS.map((review) => (
                    <div key={review.id} className={styles.slide}>
                        <blockquote>
                            <figure>
                                <div>
                                    <img alt={''} src={review.avatar} />
                                </div>
                                <div />
                            </figure>
                        </blockquote>

                        <div className={styles._container_info}>
                            <div className={styles._container_stars}>
                                <p className={styles._title}>{review.title}</p>
                                <div>
                                    <span className={styles._count_star}>5</span>
                                    <StartReviewSVG />
                                </div>
                            </div>
                            <p className={styles._text}>{review.description}</p>
                            <figcaption className={styles._figcaption}>
                                <strong className={styles._founder}>{review.employee}</strong>
                                <br />
                                {review.position}
                                <a href={review.href}>Link</a>
                            </figcaption>
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.prevBtn} type={'button'} onClick={prevSlide} />
            <button className={styles.nextBtn} type={'button'} onClick={nextSlide} />
        </div>
    );
}

const CCLIENTREVIEWS = [
    {
        id: 0,
        avatar: '/1.svg',
        title: 'Empresa 1',
        description:
            ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatemullam harum fuga at quos atque temporibus perferendis distinctioinventore. Laborum debitis, nobis quis placeat repudiandae harum minusrerum? Fuga, culpa. Lorem ipsum, dolor sit amet consectetur adipisicingelit. Rem laboriosam id non magnam odit obcaecati ducimus temporibusquaerat alias harum! Quibusdam similique sapiente a aperiam, aliquamautem vel culpa ducimus?',
        employee: 'Jeff Bezos',
        position: 'Ceo & founder',
        href: '/',
    },
    {
        id: 1,
        avatar: '/2.svg',
        title: 'Empresa 2',
        description:
            ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatemullam harum fuga at quos atque temporibus perferendis distinctioinventore. Laborum debitis, nobis quis placeat repudiandae harum minusrerum? Fuga, culpa. Lorem ipsum, dolor sit amet consectetur adipisicingelit. Rem laboriosam id non magnam odit obcaecati ducimus temporibusquaerat alias harum! Quibusdam similique sapiente a aperiam, aliquamautem vel culpa ducimus?',
        employee: 'Jeff Bezos 2',
        position: 'Product Manager',
        href: '/',
    },
    {
        id: 2,
        avatar: '/3.svg',
        title: 'Empresa 3',
        description:
            ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatemullam harum fuga at quos atque temporibus perferendis distinctioinventore. Laborum debitis, nobis quis placeat repudiandae harum minusrerum? Fuga, culpa. Lorem ipsum, dolor sit amet consectetur adipisicingelit. Rem laboriosam id non magnam odit obcaecati ducimus temporibusquaerat alias harum! Quibusdam similique sapiente a aperiam, aliquamautem vel culpa ducimus?',
        employee: 'Jeff Bezos 3',
        position: 'Ceo & founder',
        href: '/',
    },
];
