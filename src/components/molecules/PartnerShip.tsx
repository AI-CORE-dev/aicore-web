import React from 'react';

import { PhotoContainer } from '../modals/PhotoContainer';

import styles from './styles/parnert-ship.module.css';

export function PartnerShip() {
    return (
        <section className={styles._section}>
            <PhotoContainer alt={'partnership'} src={'/partnership.svg'} />
            <div className={styles._container}>
                <a className={styles._btn_follow} href={'/partnership'}>
                    Partnership
                </a>
            </div>
        </section>
    );
}
