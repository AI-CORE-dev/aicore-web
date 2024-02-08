import React from 'react';

import styles from './styles/institutional-video.module.css';

export function InstitutuionalVideo() {
    const idVideo = 'vLpWT6ojenA';

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
