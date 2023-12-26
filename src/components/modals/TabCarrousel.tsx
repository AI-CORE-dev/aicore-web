'use client';

import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';

import stylesP from '../molecules/styles/companies-we-promote.module.css';

import styles from './styles/tab-carrousel.module.css';

interface ImagesTechs {
    id: number;
    alt: string;
    src: string;
}

interface CarouselItem {
    id: number;
    title: string;
    content: {
        title: string;
        subtitle: string;
        button: string;
        techs: ImagesTechs[];
    };
    cases: {
        title: string;
        subtitle: string;
        cofounder: string;
        src: string;
        background: string;
    };
}

export function TabsCarouselComponent() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabSelect = (index: number) => {
        console.log('🚀 ~ file: TabCarrousel.tsx:39 ~ handleTabSelect ~ index:', index);

        setTabIndex(index);
    };

    const carouselItems: CarouselItem[] = [
        {
            id: 0,
            title: 'Seguros',
            content: {
                title: 'Eficientizando el control de las pólizas de seguro',
                subtitle:
                    'Desarrollamos para nuestro cliente Aon una aplicación con inteligencia artificial, que interpreta las pólizas automáticamente dando métricas y reportes de los análisis. Eficientizando así el análisis y comparativa de las pólizas y reduciendo errores.',
                button: 'Conocé más de lo que hicimos para la industría de seguros.',
                techs: [
                    {
                        id: 0,
                        alt: 'react-logo',
                        src: '/technologies/1.svg',
                    },
                    {
                        id: 1,
                        alt: 'node-logo',
                        src: '/technologies/2.svg',
                    },
                    {
                        id: 2,
                        alt: 'react-native-logo',
                        src: '/technologies/3.svg',
                    },
                    {
                        id: 3,
                        alt: 'amazon-logo',
                        src: '/technologies/4.svg',
                    },
                ],
            },
            cases: {
                title: '',
                subtitle: '',
                cofounder: '',
                src: '',
                background: '',
            },
        },
        {
            id: 1,
            title: 'Booking de Servicios',
            content: {
                title: 'Eficientizando el control de las pólizas de seguro',
                subtitle:
                    'Desarrollamos para nuestro cliente Aon una aplicación con inteligencia artificial, que interpreta las pólizas automáticamente dando métricas y reportes de los análisis. Eficientizando así el análisis y comparativa de las pólizas y reduciendo errores.',
                button: 'Conocé más de lo que hicimos para la industría de seguros.',
                techs: [
                    {
                        id: 0,
                        alt: 'react-logo',
                        src: '/technologies/1.svg',
                    },
                    {
                        id: 1,
                        alt: 'node-logo',
                        src: '/technologies/2.svg',
                    },
                    {
                        id: 2,
                        alt: 'react-native-logo',
                        src: '/technologies/3.svg',
                    },
                    {
                        id: 3,
                        alt: 'amazon-logo',
                        src: '/technologies/4.svg',
                    },
                ],
            },
            cases: {
                title: '',
                subtitle: '',
                cofounder: '',
                src: '',
                background: '',
            },
        },
        {
            id: 2,
            title: 'Información',
            content: {
                title: 'Eficientizando el control de las pólizas de seguro',
                subtitle:
                    'Desarrollamos para nuestro cliente Aon una aplicación con inteligencia artificial, que interpreta las pólizas automáticamente dando métricas y reportes de los análisis. Eficientizando así el análisis y comparativa de las pólizas y reduciendo errores.',
                button: 'Conocé más de lo que hicimos para la industría de seguros.',
                techs: [
                    {
                        id: 0,
                        alt: 'react-logo',
                        src: '/technologies/1.svg',
                    },
                    {
                        id: 1,
                        alt: 'node-logo',
                        src: '/technologies/2.svg',
                    },
                    {
                        id: 2,
                        alt: 'react-native-logo',
                        src: '/technologies/3.svg',
                    },
                    {
                        id: 3,
                        alt: 'amazon-logo',
                        src: '/technologies/4.svg',
                    },
                ],
            },
            cases: {
                title: '',
                subtitle: '',
                cofounder: '',
                src: '',
                background: '',
            },
        },
        {
            id: 3,
            title: 'Procesamiento de pagos',
            content: {
                title: 'Eficientizando el control de las pólizas de seguro',
                subtitle:
                    'Desarrollamos para nuestro cliente Aon una aplicación con inteligencia artificial, que interpreta las pólizas automáticamente dando métricas y reportes de los análisis. Eficientizando así el análisis y comparativa de las pólizas y reduciendo errores.',
                button: 'Conocé más de lo que hicimos para la industría de seguros.',
                techs: [
                    {
                        id: 0,
                        alt: 'react-logo',
                        src: '/technologies/1.svg',
                    },
                    {
                        id: 1,
                        alt: 'node-logo',
                        src: '/technologies/2.svg',
                    },
                    {
                        id: 2,
                        alt: 'react-native-logo',
                        src: '/technologies/3.svg',
                    },
                    {
                        id: 3,
                        alt: 'amazon-logo',
                        src: '/technologies/4.svg',
                    },
                ],
            },
            cases: {
                title: '',
                subtitle: '',
                cofounder: '',
                src: '',
                background: '',
            },
        },
        {
            id: 4,
            title: 'Salud',
            content: {
                title: 'Eficientizando el control de las pólizas de seguro',
                subtitle:
                    'Desarrollamos para nuestro cliente Aon una aplicación con inteligencia artificial, que interpreta las pólizas automáticamente dando métricas y reportes de los análisis. Eficientizando así el análisis y comparativa de las pólizas y reduciendo errores.',
                button: 'Conocé más de lo que hicimos para la industría de seguros.',
                techs: [
                    {
                        id: 0,
                        alt: 'react-logo',
                        src: '/technologies/1.svg',
                    },
                    {
                        id: 1,
                        alt: 'node-logo',
                        src: '/technologies/2.svg',
                    },
                    {
                        id: 2,
                        alt: 'react-native-logo',
                        src: '/technologies/3.svg',
                    },
                    {
                        id: 3,
                        alt: 'amazon-logo',
                        src: '/technologies/4.svg',
                    },
                ],
            },
            cases: {
                title: '',
                subtitle: '',
                cofounder: '',
                src: '',
                background: '',
            },
        },
        {
            id: 5,
            title: 'Finanzas',
            content: {
                title: 'Eficientizando el control de las pólizas de seguro',
                subtitle:
                    'Desarrollamos para nuestro cliente Aon una aplicación con inteligencia artificial, que interpreta las pólizas automáticamente dando métricas y reportes de los análisis. Eficientizando así el análisis y comparativa de las pólizas y reduciendo errores.',
                button: 'Conocé más de lo que hicimos para la industría de seguros.',
                techs: [
                    {
                        id: 0,
                        alt: 'react-logo',
                        src: '/technologies/1.svg',
                    },
                    {
                        id: 1,
                        alt: 'node-logo',
                        src: '/technologies/2.svg',
                    },
                    {
                        id: 2,
                        alt: 'react-native-logo',
                        src: '/technologies/3.svg',
                    },
                    {
                        id: 3,
                        alt: 'amazon-logo',
                        src: '/technologies/4.svg',
                    },
                ],
            },
            cases: {
                title: '',
                subtitle: '',
                cofounder: '',
                src: '',
                background: '',
            },
        },
    ];

    const renderCarouselForTab = (carouselItems: CarouselItem) => {
        console.log(
            '🚀 ~ file: TabCarrousel.tsx:282 ~ renderCarouselForTab ~ carouselItems:',
            carouselItems,
        );

        return (
            <>
                <ul className={styles['_tabs-content']}>
                    <li key={carouselItems.id} className={stylesP['_tabs-list']}>
                        <div className={stylesP['_tabs-column']}>
                            <h3 className={stylesP['_tabs-title']}>
                                Eficientizando el control de las pólizas de seguro
                            </h3>
                            <p className={stylesP['_tabs-text']}>
                                Desarrollamos para nuestro cliente Aon una aplicación con
                                inteligencia artificial, que interpreta las pólizas automáticamente
                                dando métricas y reportes de los análisis. Eficientizando así el
                                análisis y comparativa de las pólizas y reduciendo errores.
                            </p>
                            <a className={stylesP['_tabs-link']} href={'/'}>
                                Conocé más de lo que hicimos para la industría de seguros.
                            </a>
                        </div>
                        <div className={stylesP['_tabs-column']}>
                            <h3 className={styles['_tabs-title']}>Tecnologías</h3>
                            <div>
                                <div className={stylesP['_tabs-images']}>
                                    {carouselItems.content.techs.map((item) => (
                                        <Image
                                            key={item.id}
                                            alt={item.alt}
                                            height={100}
                                            src={item.src}
                                            style={{
                                                marginRight: '60px',
                                            }}
                                            width={100}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className={styles['_slides-container']}>
                    <div className={styles['_slide-module-bg']}>
                        <div className={styles['_slide-content']}>
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
                    </div>
                </div>
            </>
        );
    };

    const filterCarrouselItems = (tabIndex: number) => {
        const ic = carouselItems.filter((item) => item.id === tabIndex);

        return ic.map((item) => renderCarouselForTab(item));
    };

    return (
        <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
            <TabList className={styles._tabs_list}>
                {carouselItems.map((tab) => (
                    <Tab key={tab.id} className={styles._tabs_item}>
                        <p className={styles._tabs_btn}>{tab.title}</p>
                    </Tab>
                ))}

                <TabPanel>{filterCarrouselItems(tabIndex)}</TabPanel>
            </TabList>
        </Tabs>
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
