import React from 'react';

import styles from './styles/video-player.module.css';

interface IProps {
    videoId?: string;
    isLocal?: boolean;
    srcLocal?: string;
}

export function VideoPlayer({ videoId, isLocal, srcLocal }: IProps) {
    return (
        <div className={styles._video_container}>
            {isLocal ? (
                <video
                    controls
                    height={'360'}
                    src={srcLocal ? srcLocal : './carrers/videos/institucional.mp4'}
                    width={'100%'}
                >
                    <track kind={'captions'} label={'Spanish'} srcLang={'es'} />
                </video>
            ) : (
                <iframe
                    allowFullScreen
                    frameBorder={'0'} // Para navegadores antiguos
                    height={'600'}
                    loading={'lazy'}
                    sandbox={'allow-same-origin allow-scripts allow-popups allow-presentation'}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    style={{
                        border: 'none',
                        width: '100%',
                        flex: 1,
                    }}
                    title={'video'}
                    width={'100%'}
                />
            )}
        </div>
    );
}
