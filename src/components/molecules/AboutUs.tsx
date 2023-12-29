import React from 'react';

import styles from './styles/about-us.module.css';

function FirstTemplate() {
    return (
        <div className={styles._inner}>
            <div className={styles._container_image_info}>
                <div className={styles._info_container}>
                    <div className={styles._description}>
                        <p className={`${styles._text_margin_bottom} ${styles._text_description}`}>
                            Brindamos un servicio integeral abordando todas las etapas de
                            desarrollo: Planeamiento, ejecución, control de los recursos,
                            optimizaciones y soporte técnico con la finalidad de alcanzar los
                            objetivos propuestos.
                        </p>
                        <p className={styles._text_description}>
                            Tomar decisiones, resolver problemás y eficientizar procesos. Por esto
                            contamos con:
                        </p>
                    </div>

                    <div className={styles._info_numbers}>
                        {DEFINITIONS.map((definition) => (
                            <dl key={definition.id} className={styles._dl}>
                                <dt className={styles._dt}>{definition.title}</dt>
                                <dd className={styles._dd}>{definition.subtitle}</dd>
                            </dl>
                        ))}
                    </div>
                </div>
                <div className={styles._image_container}>
                    <div>
                        <img
                            alt={'nosotros'}
                            className={styles._image}
                            src={'/about_us/socios.jpg'}
                        />
                    </div>
                    <div className={styles._text_container}>
                        <p className={styles._text_primary}>Socios fundadores</p>
                        <p className={`${styles._text_primary} ${styles._text_weigth}`}>
                            Ezequiel Maranga, Alfredo Rey, Ivan Addolorato
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SecondTemplate() {
    return (
        <div className={styles._inner_second_template}>
            <p className={styles._title}>
                En AI CORE el talento lo desarrollamos juntos en cada proyecto.
            </p>

            <div className={styles._info_container_second_template}>
                <div className={styles._info_numbers_st}>
                    {DEFINITIONS.map((definition) => (
                        <dl key={definition.id} className={styles._dl_st}>
                            <dt className={styles._dt}>{definition.title}</dt>
                            <dd className={styles._dd}>{definition.subtitle}</dd>
                        </dl>
                    ))}
                </div>

                <div className={styles._description}>
                    <p className={`${styles._text_margin_bottom} ${styles._text_description}`}>
                        AI CORE es el aliado perfecto para organizaciones que buscan materializar
                        sus proyectos tecnológicos, cada día es un desafío y una oportunidad para
                        aprender y crecer.
                    </p>
                    <p className={styles._text_description}>
                        No nos cerramos solo al código, nuestro rol requiere aportar valor desde el
                        servicio, la experiencia de uso, el diseño, la consultoría y la gestión de
                        proyectos.
                    </p>
                </div>
            </div>
        </div>
    );
}

interface IProps {
    isCareers?: boolean;
}

export function AboutUs({ isCareers = false }: IProps) {
    return (
        <section className={styles._section}>
            {isCareers ? (
                <SecondTemplate />
            ) : (
                <>
                    <FirstTemplate />

                    <div className={styles._container_image_word}>
                        <video
                            autoPlay
                            controls
                            loop
                            src={'/about_us/video_mundo.mp4'}
                            width={'100%'}
                        >
                            <track kind={'captions'} label={'Spanish'} srcLang={'es'} />
                        </video>
                    </div>
                </>
            )}
        </section>
    );
}

const DEFINITIONS = [
    {
        id: 0,
        title: '+30',
        subtitle: 'Desarrolladores',
    },
    {
        id: 1,
        title: '+40',
        subtitle: 'Proyectos realizados',
    },
    {
        id: 2,
        title: '15',
        subtitle: 'Años de experiencia IT',
    },
    {
        id: 3,
        title: '60%',
        subtitle: 'De staff senior',
    },
];
