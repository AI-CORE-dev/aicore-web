import React from 'react';

import styles from './styles/video-player.module.css';

interface IProps {
    videoId: string;
}

export function VideoPlayer({ videoId }: IProps) {
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
