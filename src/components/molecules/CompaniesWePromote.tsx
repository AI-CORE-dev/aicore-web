import React from 'react';
import Image from 'next/image';

import styles from './styles/companies-we-promote.module.css';

export function CompaniesWePromote() {
    return (
        <section className={styles._section}>
            <div>
                <div className={styles._section_info}>
                    <div className={styles._inner}>
                        <h2 className={styles._title}>Industrias en las que agregamos valor</h2>
                        <ul className={styles['_tabs-list']}>
                            {TABS.map((tab) => (
                                <li key={tab.id} className={styles['_tabs-item']}>
                                    <p className={styles['_tabs-btn']}>{tab.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ul className={styles['_tabs-content']}>
                        <li className={styles['_tabs-list']}>
                            <div className={styles['_tabs-column']}>
                                <h3 className={styles['_tabs-title']}>
                                    Eficientizando el control de las pólizas de seguro
                                </h3>
                                <p className={styles['_tabs-text']}>
                                    Desarrollamos para nuestro cliente Aon una aplicación con
                                    inteligencia artificial, que interpreta las pólizas
                                    automáticamente dando métricas y reportes de los análisis.
                                    Eficientizando así el análisis y comparativa de las pólizas y
                                    reduciendo errores.
                                </p>
                                {/*<a className={styles['_tabs-link']} href={''}>
                                Conocé más de lo que hicimos para la industría de seguros.
                            </a>*/}
                            </div>
                            <div className={styles['_tabs-column']}>
                                <h3 className={styles['_tabs-title']}>Tecnologías</h3>
                                <div>
                                    <div className={styles['_tabs-images']}>
                                        <Image
                                            alt={'react-logo'}
                                            height={100}
                                            src={'/technologies/1.svg'}
                                            style={{
                                                marginRight: '60px',
                                            }}
                                            width={100}
                                        />
                                        <Image
                                            alt={'node-logo'}
                                            height={100}
                                            src={'/technologies/2.svg'}
                                            width={100}
                                        />
                                    </div>
                                    <div className={styles['_tabs-images']}>
                                        <Image
                                            alt={'react-native-logo'}
                                            height={100}
                                            src={'/technologies/3.svg'}
                                            style={{
                                                marginRight: '60px',
                                            }}
                                            width={100}
                                        />
                                        <Image
                                            alt={'amazon-logo'}
                                            height={100}
                                            src={'/technologies/4.svg'}
                                            width={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles['_slides-container']}>
                    <img alt={'bg-wk'} className={styles['_slide-image']} src={'/bg_case_wm.svg'} />
                    {/* <div className={styles['_slide-module-bg']}>
                        <div className={styles['_slide-content']}>
                            <img
                                alt={'bg-wk'}
                                className={styles['_slide-image']}
                                src={'/bg_case_wm.svg'}
                            />
                            <div className={styles['_slide-text']}>
                                <div style={{ marginBottom: '20px' }}>
                                    <h2 style={{ color: '#000', marginBottom: '8px' }}>
                                        Potenciando la revolución del trabajo híbrido
                                    </h2>
                                    <blockquote style={{ color: '#000' }}>
                                        Acompañamos a Worknmates mediante nuestra solución de MVPaaS
                                        y CTOaaS en la concepción y desarrollando su marketplace de
                                        coworkings + home office market place que permite reservar
                                        espacios de trabajo a las empresas que desean implementar un
                                        modelo hibrido.
                                    </blockquote>
                                </div>
                                <a className={styles['_btn-black']}>Caso de estudio</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

const TABS = [
    {
        id: 0,
        title: 'Seguros',
    },
    {
        id: 1,
        title: 'Booking de Servicios',
    },
    {
        id: 2,
        title: 'Información',
    },
    {
        id: 3,
        title: 'Procesamiento de pagos',
    },
    {
        id: 4,
        title: 'Salud',
    },
    {
        id: 5,
        title: 'Finanzas',
    },
];

const IMAGES = [
    {
        id: 0,
        src: 'https://brocoders.com/static/3ca2637d12400941290ecd325ebc2739/react-logo.svg',
    },
    {
        id: 1,
        src: 'https://brocoders.com/static/4bfe740566e5cf926b847d3a8a237ffe/nodejs-logo.svg',
    },
    {
        id: 2,
        src: 'https://brocoders.com/static/be1da5e9afe5a740b012b5df5236b446/react-native-logo.svg',
    },
    {
        id: 3,
        src: 'https://brocoders.com/static/5e94b5e13daa4148af187124f63ce1c3/amazon-logo.svg',
    },
];
