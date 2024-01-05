'use client';

import { useState } from 'react';

import { WaveCaseOne, WaveCaseThree, WaveCaseTwo } from '@/assets/svg/case-studies';

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

    const renderWaveForTab = () => {
        switch (currentIndex) {
            case 0:
                return <WaveCaseOne />;
            case 1:
                return <WaveCaseTwo />;
            case 2:
                return <WaveCaseThree />;
        }
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
                                  className={`${styles._slides_container}`}
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

const CCLIENTREVIEWS2 = [
    {
        id: 0,
        cases: {
            color_background: '#ff5500',
            title: 'Eficientizando el control de las polizas de seguros con IA para Aon.',
            subtitle:
                '"Cuando encaramos este proyecto para Aon sabíamos que era crucial aportar una camino para interpretar diferentes formatos en los cuales se presentaban los contratos digitales con el objetivo de recopilar información crucial para la toma de desciciones."',
            cofounder: 'AON',
            src: '/bg_img.png',
            background: '',
        },
    },
    {
        id: 1,
        cases: {
            color_background: '#0099ff',
            title: 'Potenciando la revolución del trabajo híbrido junto a Worknmates.',
            subtitle:
                '"Acompañamos a Worknmates mediante nuestra solución de MVPaaS y CTOaaS en la concepción y desarrollando su marketplace de coworkings + home office market place que permite reservar espacios de trabajo a las empresas que desean implementar un modelo hibrido."',
            cofounder: 'Gonzalo Agüero',
            src: '/bg_img.png',
            background: '',
        },
    },
    {
        id: 2,
        cases: {
            color_background: '#5000ca',
            title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle:
                'Acompañamos a Worknmates mediante nuestra solución de MVPaaS y CTOaaS en la concepción y desarrollando su marketplace de coworkings + home office market place que permite reservar espacios de trabajo a las empresas que desean implementar un modelo hibrido."',
            cofounder: 'lorem ipsum',
            src: '',
            background: '',
        },
    },
];
