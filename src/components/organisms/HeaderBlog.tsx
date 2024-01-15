import React from 'react';

import styles from './styles/header-blog.module.css';
interface IProps {
    isVideo?: boolean;
    title?: string;
    subtitle?: string;
    isButtonPrimary?: boolean;
    textButton?: string;
    isButtonSecondary?: boolean;
    textButtonSecondary?: string;
    isHome?: boolean;
}

export function HeaderBlog({
    title = 'Lorem ipsum',
    subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}: IProps) {
    return (
        <header className={styles._header}>
            <div className={styles._header_module}>
                <div className={styles._container_texts}>
                    <h1 className={styles._title}>{title}</h1>
                    <h3 className={styles._subtitle}>{subtitle}</h3>
                </div>

                <div className={styles._container_input}>
                    <form action={''}>
                        <div className={styles._content}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderBottom: '1px solid #b2b5bd',
                                }}
                            >
                                <label className={styles._label} htmlFor={'searchInput'}>
                                    Mantengase al tanto
                                </label>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        fill={'none'}
                                        height={'25'}
                                        stroke={'#AFB2B8'}
                                        viewBox={'0 0 23 15'}
                                        width={'33'}
                                    >
                                        <rect
                                            height={'14'}
                                            rx={'1.5'}
                                            width={'22'}
                                            x={'0.5'}
                                            y={'0.5'}
                                        />
                                        <path
                                            d={
                                                'M0.5 2.5L10.717 8.40818C11.3483 8.77322 12.1282 8.76575 12.7524 8.38868L22.5 2.5'
                                            }
                                            strokeLinecap={'round'}
                                            strokeLinejoin={'round'}
                                        />
                                        <path d={'M14 7.5L22.5 13'} />
                                        <path d={'M9.5 7.5L0.5 13'} />
                                    </svg>
                                    <input
                                        className={styles._input}
                                        id={'searchInput'}
                                        placeholder={'Email'}
                                        type={'text'}
                                    />
                                </div>
                            </div>
                            <button className={styles._btn} type={'submit'}>
                                <svg fill={'none'} height={'20'} viewBox={'0 0 20 20'} width={'20'}>
                                    <path
                                        d={
                                            'M18.9648 0.830915C18.8588 0.756696 18.721 0.714284 18.5831 0.714284C18.4665 0.714284 18.3499 0.746093 18.2439 0.809709L0.601004 10.9883C0.378348 11.1155 0.251116 11.3594 0.261719 11.6138C0.282924 11.8789 0.441964 12.1016 0.685826 12.197L4.87388 13.9146L16.2081 4.10714L7.04743 15.3354V19.0357C7.04743 19.322 7.22768 19.5765 7.49275 19.6719C7.56696 19.7037 7.65179 19.7143 7.726 19.7143C7.92746 19.7143 8.1183 19.6295 8.24554 19.4704L10.8114 16.3426L15.6144 18.3041C15.6992 18.3359 15.784 18.3571 15.8689 18.3571C15.9855 18.3571 16.1021 18.3253 16.1975 18.2723C16.3778 18.1663 16.505 17.9967 16.5368 17.7952L19.2511 1.50949C19.2935 1.24442 19.1875 0.989955 18.9648 0.830915Z'
                                        }
                                        fill={'white'}
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}
