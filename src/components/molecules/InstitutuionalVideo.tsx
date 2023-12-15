import React from 'react';

import { VideoPlayer } from '../modals/VideoPlayer';

export function InstitutuionalVideo() {
    const idVideo = 'vLpWT6ojenA';

    return (
        <section
            style={{
                height: '100vh',
            }}
        >
            <iframe
                allowFullScreen
                frameBorder={'0'} // Para navegadores antiguos
                height={'1080'}
                loading={'lazy'}
                sandbox={'allow-same-origin allow-scripts allow-popups allow-presentation'}
                src={`https://www.youtube.com/embed/${idVideo}`}
                style={{
                    border: 'none',
                    width: '100%',
                    flex: 1,
                }}
                title={'video'}
                width={'100%'}
            />
        </section>
    );
}
