import React from 'react';
import Image from 'next/image';

import styles from './styles/companies-we-promote.module.css';

export function CompaniesWePromote() {
    return (
        <section className={styles._section}>
            <div>
                <div className={styles._inner}>
                    <h2 className={styles._title}>Empresas que potenciamos</h2>
                    <ul className={styles['_tabs-list']}>
                        <li className={styles['_tabs-item']}>
                            <button className={styles['_tabs-btn']}>Worknmates</button>
                        </li>
                    </ul>
                </div>

                <ul className={styles['_tabs-content']}>
                    <li className={styles['_tabs-list']}>
                        <div className={styles['_tabs-column']}>
                            <h3 className={styles['_tabs-title']}>Problema a resolver</h3>
                            <p className={styles['_tabs-text']}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
                                soluta nemo eaque commodi, voluptatum aliquam eos blanditiis ratione
                                unde illum, natus odit aspernatur totam voluptatem! Iure laborum
                                accusamus fugit quo?
                            </p>
                            <a className={styles['_tabs-link']} href={''}>
                                Obtenga mas informacion sobre worknmates
                            </a>
                        </div>
                        <div className={styles['_tabs-column']}>
                            <h3 className={styles['_tabs-title']} style={{ marginTop: '20px' }}>
                                Tecnologías
                            </h3>
                            <div>
                                <div className={styles['_tabs-images']}>
                                    <Image
                                        alt={'react-logo'}
                                        height={100}
                                        src={
                                            'https://brocoders.com/static/3ca2637d12400941290ecd325ebc2739/react-logo.svg'
                                        }
                                        style={{
                                            marginRight: '60px',
                                        }}
                                        width={100}
                                    />
                                    <Image
                                        alt={'node-logo'}
                                        height={100}
                                        src={
                                            'https://brocoders.com/static/4bfe740566e5cf926b847d3a8a237ffe/nodejs-logo.svg'
                                        }
                                        width={100}
                                    />
                                </div>
                                <div className={styles['_tabs-images']}>
                                    <Image
                                        alt={'react-native-logo'}
                                        height={100}
                                        src={
                                            'https://brocoders.com/static/be1da5e9afe5a740b012b5df5236b446/react-native-logo.svg'
                                        }
                                        style={{
                                            marginRight: '60px',
                                        }}
                                        width={100}
                                    />
                                    <Image
                                        alt={'amazon-logo'}
                                        height={100}
                                        src={
                                            '	https://brocoders.com/static/5e94b5e13daa4148af187124f63ce1c3/amazon-logo.svg'
                                        }
                                        width={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className={styles['_slides-container']}>
                    <div className={styles['_slide-module-bg']}>
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
                                        Acompañamos a worknmates mediante un MVPaaS, desarrollando
                                        su marketplace de coworkings + home office market place que
                                        permite reservar espacios de trabajo a las empresas que
                                        desean implementar un modelo hibrido.
                                    </blockquote>
                                </div>
                                <a className={styles['_btn-black']}>Caso de estudio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
/*

*/
