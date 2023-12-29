'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { CCAROUSELITEM } from '@/helpers/consts';
import {
    WaveCaseFive,
    WaveCaseFour,
    WaveCaseOne,
    WaveCaseSix,
    WaveCaseThree,
    WaveCaseTwo,
} from '@/assets/svg/case-studies';

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
        color_background: string;
        title: string;
        subtitle: string;
        cofounder: string;
        src: string;
        background: string;
    };
}

export function TabsCarouselComponent() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabSelect = (index: number) => {
        setActiveTab(index);
    };

    const filterCarrouselItems = (selectedItem: number) => {
        return CCAROUSELITEM.filter((item) => item.id === selectedItem)[0];
    };

    const renderWaveForTab = () => {
        switch (activeTab) {
            case 0:
                return <WaveCaseOne />;
            case 1:
                return <WaveCaseTwo />;
            case 2:
                return <WaveCaseThree />;
            case 3:
                return <WaveCaseFour />;
            case 4:
                return <WaveCaseFive />;
            case 5:
                return <WaveCaseSix />;
            default:
                return <WaveCaseOne />;
        }
    };

    const renderCarouselForTab = (carouselItems: CarouselItem) => {
        return (
            <div className={styles._inner}>
                <ul className={`${styles._first_section}`}>
                    <li key={carouselItems.id} className={`${styles._first_section_list}`}>
                        <div className={styles._first_section_column}>
                            <h3 className={styles._first_section_title}>
                                {carouselItems.content.title}
                            </h3>
                            <p className={styles._first_section_text}>
                                {carouselItems.content.subtitle}
                            </p>
                            <a className={styles._first_section_link} href={'/'}>
                                {carouselItems.content.button}
                            </a>
                        </div>
                        <div className={styles._first_section_column}>
                            <h3 className={styles._first_section_title}>Tecnologías</h3>
                            <div>
                                <div className={styles._tecnologies_images}>
                                    {carouselItems.content.techs
                                        .slice(0, Math.ceil(carouselItems.content.techs.length / 2))
                                        .map((item) => (
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

                                <div className={styles._tecnologies_images}>
                                    {carouselItems.content.techs
                                        .slice(Math.ceil(carouselItems.content.techs.length / 2))
                                        .map((item) => (
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
                <div>
                    <span className={styles._wave_container}>{renderWaveForTab()}</span>
                    <div
                        className={`${styles._slides_container}`}
                        style={{ backgroundColor: carouselItems.cases.color_background }}
                    >
                        <div className={styles._slide_module_bg}>
                            <div className={styles._slide_content}>
                                <div className={styles._slide_text}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h2 className={styles._second_section_title}>
                                            {carouselItems.cases.title}
                                        </h2>
                                        <blockquote className={styles._second_section_text}>
                                            {carouselItems.cases.subtitle}
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
            </div>
        );
    };

    return (
        <div>
            <div className={styles._tabs_list}>
                {CCAROUSELITEM.map((tab) => {
                    const classActive =
                        tab.id === activeTab
                            ? `${styles._tabs_btn} ${styles._tabs_active}`
                            : `${styles._tabs_btn}`;

                    return (
                        <div
                            key={tab.id}
                            className={styles._tabs_item}
                            onClick={() => handleTabSelect(tab.id)}
                        >
                            <p className={classActive}>{tab.title}</p>
                        </div>
                    );
                })}
            </div>
            <div>{renderCarouselForTab(filterCarrouselItems(activeTab))}</div>
        </div>
    );
}
