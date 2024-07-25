'use client';

import React from 'react';

import { SVGPolo } from '../atoms/SVGPolo';

import styles from './styles/banner-polo.module.css';

export function BannerPolo() {
    return (
        <section className={styles._section}>
            <div onClick={
                () => {
                    window.open('https://www.poloitbuenosaires.org.ar/listade-asociados', '_blank');
                }
            } className={styles._inner}>
                <SVGPolo height={'auto'} width={'100%'} />
            </div>
        </section>
    );
}
