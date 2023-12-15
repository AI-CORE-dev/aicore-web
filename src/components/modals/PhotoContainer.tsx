import React from 'react';

import styles from './styles/photo-container.module.css';

interface IProps {
    src: string;
    alt: string;
}

export function PhotoContainer({ src, alt }: IProps) {
    return (
        <div className={styles._inner}>
            <img
                alt={alt ? alt : 'PhotoContainer'}
                className={styles._img}
                src={src ? src : './carrers/aicore_collage.svg'}
            />
        </div>
    );
}
