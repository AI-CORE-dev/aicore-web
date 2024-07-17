'use client';

import React from 'react';

import { SVGPolo } from '../atoms/SVGPolo';

import styles from './styles/banner-polo.module.css';

export function BannerPolo() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <SVGPolo height={'auto'} width={'100%'} />
            </div>
        </section>
    );
}
