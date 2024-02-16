'use client';

import { useState } from 'react';

import { CCLIENTREVIEWS, CCLIENTREVIEWS2 } from '@/helpers/consts';

import { StartReviewSVG } from '../../assets/svg/StartReview';

import styles from './styles/carrousel-review-client.module.css';

interface ICarouselItem {
    type?: boolean;
}

export function CarouselReviewClient({ type = false }: ICarouselItem) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cambiar el numero si se aumenta la cantidad de item del carrusel
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // aca tambien
    };

    return (
        <div className={styles.carousel}>
            <div
                className={styles.slides}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {type
                    ? CCLIENTREVIEWS2.map((review) => (
                          <div key={review.id} className={styles.slides_second_section}>
                              <div
                                  className={styles._slides_container}
                                  style={{
                                      backgroundColor: review.cases.color_background,
                                  }}
                              >
                                  <div className={styles._slide_module_bg}>
                                      <div className={styles._slide_content}>
                                          <div className={styles._slide_text}>
                                              <div style={{ marginBottom: '20px' }}>
                                                  <h2 className={styles._second_section_title}>
                                                      {review.cases.title}
                                                  </h2>
                                                  <blockquote
                                                      className={styles._second_section_text}
                                                  >
                                                      {review.cases.subtitle}
                                                  </blockquote>
                                              </div>
                                              <a
                                                  className={styles._btn_black}
                                                  href={'/case-studies/worknmates'}
                                              >
                                                  Caso de estudio
                                              </a>
                                          </div>
                                      </div>
                                      <img
                                          alt={'bg_img.png'}
                                          className={styles._pc_image}
                                          src={'/bg_img.png'}
                                      />
                                  </div>
                              </div>
                          </div>
                      ))
                    : CCLIENTREVIEWS.map((review) => (
                          <div key={review.id} className={styles.slide}>
                              <blockquote>
                                  <figure>
                                      <div>
                                          <img
                                              alt={''}
                                              className={styles._container_avatar}
                                              src={review.avatar}
                                          />
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
                                      <a className={styles._link} href={review.href}>
                                          Link
                                      </a>
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
