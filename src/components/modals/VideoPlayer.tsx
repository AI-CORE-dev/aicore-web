import React from 'react';

import styles from './styles/video-player.module.css';

interface IProps {
    videoId: string;
}

export function VideoPlayer({ videoId }: IProps) {
    const opts = {
        height: '360',
        width: '100%',
        playerVars: {
            autoplay: 0,
            origin: 'http://localhost:3000',
        },
    };

    return (
        <div className={styles._video_container}>
            <iframe
                allowFullScreen
                height={'500'}
                src={`https://www.youtube.com/embed/${videoId}`}
                style={{
                    border: 'none',
                    width: '100%',
                }}
                title={'YouTube Video'}
            />
        </div>
    );
}
