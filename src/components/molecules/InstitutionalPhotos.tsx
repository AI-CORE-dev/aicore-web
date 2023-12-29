import React from 'react';

import { PhotoContainer } from '../modals/PhotoContainer';

import styles from './styles/institutional-photos.module.css';

export function InstitutionalPhotos() {
    return (
        <section className={styles._section}>
            <PhotoContainer alt={'AICORE'} src={'/carrers/aicore_collage.svg'} />
        </section>
    );
}
