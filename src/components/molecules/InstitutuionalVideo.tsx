import React from 'react';

import styles from './styles/institutional-video.module.css';

export function InstitutuionalVideo() {
    const idVideo = 'vLpWT6ojenA';

    return (
        <section className={styles._section}>
            <iframe
                allowFullScreen
                frameBorder={'0'} // Para navegadores antiguos
                loading={'lazy'}
                sandbox={'allow-same-origin allow-scripts allow-popups allow-presentation'}
                src={`https://www.youtube.com/embed/${idVideo}`}
                style={{
                    border: 'none',
                    width: '100%',
                    flex: 1,
                    height: '80vh',
                }}
                title={'video'}
                width={'100%'}
            />
        </section>
    );
}
