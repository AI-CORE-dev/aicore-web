import styles from './styles/header-article.module.css';

export function HeaderArticle() {
    return (
        <header className={styles._header}>
            <div>
                <div
                    style={{
                        opacity: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgb(0, 0, 0, 0.7)',
                        height: '100vh',
                        padding: '150px 0px 50px 100px',
                        justifyContent: 'space-between',
                    }}
                >
                    <ul className={styles._container_links}>
                        {CLINKS.map((link) => (
                            <li key={link.id}>
                                <a className={styles._link_nav} href={link.href}>
                                    <svg
                                        fill={'none'}
                                        height={'24'}
                                        viewBox={'0 0 24 24'}
                                        width={'24'}
                                    >
                                        <path
                                            d={
                                                'M15.165 16.4198C15.485 16.7198 15.485 17.2398 15.185 17.5598C15.025 17.7198 14.825 17.7998 14.605 17.7998C14.405 17.7998 14.205 17.7198 14.045 17.5798L8.84497 12.5798C8.68497 12.4198 8.60498 12.2198 8.60498 11.9998C8.60498 11.7798 8.68497 11.5798 8.84497 11.4198L14.045 6.41983C14.365 6.11983 14.865 6.11983 15.185 6.43983C15.485 6.75983 15.485 7.25982 15.165 7.57982L10.565 11.9998L15.165 16.4198Z'
                                            }
                                            fill={'white'}
                                        />
                                    </svg>
                                    <span>{link.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div>
                        {CDATAARTICLE.map((item) => (
                            <div key={item.id}>
                                <div>
                                    <div className={styles._date}>{item.date}</div>

                                    <h2 className={styles._title}>{item.title}</h2>
                                </div>

                                <ul>
                                    {item.category.map((category) => (
                                        <li key={category} className={styles._container_link}>
                                            <h1 className={styles._item_link}>{category}</h1>
                                        </li>
                                    ))}
                                </ul>

                                <div className={styles._container_header}>
                                    <div className={styles._circle}>
                                        <img
                                            alt={'fav-icon'}
                                            className={styles._img}
                                            src={
                                                'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png'
                                            }
                                        />
                                    </div>
                                    <div className={styles._container_info}>
                                        <p className={styles._name_sale}>{item.name}</p>
                                        <p className={styles._profession}>{item.profession}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

const CLINKS = [
    {
        id: 0,
        href: '/',
        text: 'Home',
    },
    {
        id: 1,
        href: '/blog',
        text: 'Blog',
    },
    {
        id: 2,
        href: '/blog',
        text: 'Articulos',
    },
];

const CDATAARTICLE = [
    {
        id: 0,
        title: 'El futuro de la fuerza laboral: combinación de equipos internos y equipos aumentados: modelo híbrido',
        date: '2024-01-08',
        category: ['Tag 1', 'Tag 2', 'Tag 3'],
        img: 'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png',
        name: 'Usuario 1',
        profession: 'Profesion',
    },
];
