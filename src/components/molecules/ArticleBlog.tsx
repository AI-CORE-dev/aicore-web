import styles from './styles/article-blog.module.css';

export function ArticleBlog() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <ul>
                    {CDATAARTICLE.map((item) => (
                        <li key={item.id}>
                            <div className={styles._list}>
                                <div className={styles._item}>
                                    <div>
                                        <div className={styles._date}>{item.date}</div>
                                        <a href={'/'}>
                                            <h2 className={styles._title}>{item.title}</h2>
                                        </a>
                                    </div>

                                    <ul>
                                        {item.category.map((category) => (
                                            <li key={category} className={styles._container_link}>
                                                <a className={styles._item_link} href={'/blog'}>
                                                    {category}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={`${styles._container_header}`}>
                                        <div className={`${styles._circle}`}>
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

                                    <a className={styles._link_redirec} href={'/blog'}>
                                        Leer post
                                    </a>
                                </div>

                                <div className={styles._item}>
                                    <a href={'/blog'}>
                                        <div className={styles._item_img} />
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const CDATAARTICLE = [
    {
        id: 0,
        title: 'El futuro de la fuerza laboral: combinación de equipos internos y equipos aumentados: modelo híbrido',
        date: '2024-01-08',
        category: ['Augmentation', 'Web Development'],
        img: 'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png',
        name: 'Eduardo Brizuela',
        profession: 'Ingeniero & Abogado',
        link: '/blog',
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, nisl eget',
        date: '2024-03-04',
        category: ['Consulting', 'App Development'],
        img: 'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png',
        name: 'Ezequiel Maranga',
        profession: 'COO',
        link: '/blog',
    },
];
