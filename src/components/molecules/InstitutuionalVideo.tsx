import React from 'react';

import styles from './styles/institutional-video.module.css';

interface IProps {
    idVideo: string;
}

export function InstitutuionalVideo({ idVideo = '_yg7X-w_Uhs' }: IProps) {
    return (
        <section className={styles._section}>
            <iframe
                allowFullScreen
                className={styles._video}
                frameBorder={'0'} // Para navegadores antiguos
                loading={'lazy'}
                sandbox={'allow-same-origin allow-scripts allow-popups allow-presentation'}
                src={`https://www.youtube.com/embed/${idVideo}`}
                title={'video'}
                width={'100%'}
            />
        </section>
    );
}
