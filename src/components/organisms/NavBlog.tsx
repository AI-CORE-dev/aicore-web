import styles from './styles/nav-blog.module.css';

export function NavBlog() {
    return (
        <nav className={styles._nav}>
            <div className={styles._container_navs}>
                <ul className={styles._ul_navs}>
                    <li>
                        <a className={styles._link} href={'/'}>
                            Todo
                        </a>
                    </li>
                    <li>
                        <a className={styles._link} href={'/'}>
                            Noticias
                        </a>
                    </li>
                    <li>
                        <a className={styles._link} href={'/'}>
                            I+D
                        </a>
                    </li>
                    <li>
                        <a className={styles._link} href={'/'}>
                            Persperctivas del COO
                        </a>
                    </li>
                    <li>
                        <a className={styles._link} href={'/'}>
                            Entrevista
                        </a>
                    </li>
                </ul>

                <div>
                    <a href={'/blog/search'}>
                        <svg fill={'none'} height={'20'} viewBox={'0 0 20 20'} width={'20'}>
                            <path
                                clipRule={'evenodd'}
                                d={
                                    'M13.1464 4.32304C10.7094 1.88605 6.76009 1.88605 4.3231 4.32304C1.88612 6.76002 1.88612 10.7094 4.3231 13.1463C6.76009 15.5833 10.7094 15.5833 13.1464 13.1463C15.5834 10.7094 15.5834 6.76002 13.1464 4.32304ZM19.635 19.635C19.1471 20.1217 18.3573 20.1217 17.8694 19.635L13.94 15.7044C10.5185 18.2624 5.66696 18.0203 2.55865 14.9108C-0.852882 11.5005 -0.852882 5.97018 2.55865 2.55865C5.96893 -0.852882 11.5005 -0.852882 14.9108 2.55865C18.0203 5.66696 18.2624 10.5185 15.7044 13.94L19.635 17.8706C20.1217 18.3573 20.1217 19.1471 19.635 19.635Z'
                                }
                                fill={'white'}
                                fillRule={'evenodd'}
                            />
                            <mask
                                height={'20'}
                                id={'mask0'}
                                maskUnits={'userSpaceOnUse'}
                                width={'20'}
                                x={'0'}
                                y={'0'}
                            >
                                <path
                                    clipRule={'evenodd'}
                                    d={
                                        'M13.1464 4.32304C10.7094 1.88605 6.76009 1.88605 4.3231 4.32304C1.88612 6.76002 1.88612 10.7094 4.3231 13.1463C6.76009 15.5833 10.7094 15.5833 13.1464 13.1463C15.5834 10.7094 15.5834 6.76002 13.1464 4.32304ZM19.635 19.635C19.1471 20.1217 18.3573 20.1217 17.8694 19.635L13.94 15.7044C10.5185 18.2624 5.66696 18.0203 2.55865 14.9108C-0.852882 11.5005 -0.852882 5.97018 2.55865 2.55865C5.96893 -0.852882 11.5005 -0.852882 14.9108 2.55865C18.0203 5.66696 18.2624 10.5185 15.7044 13.94L19.635 17.8706C20.1217 18.3573 20.1217 19.1471 19.635 19.635Z'
                                    }
                                    fill={'white'}
                                    fillRule={'evenodd'}
                                />
                            </mask>
                            <g mask={'url(#mask0)'} />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
}
