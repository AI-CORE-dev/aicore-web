import styles from './styles/cards-cases.module.css';

export function CardsCases() {
    return (
        <ul className={styles._list_cases}>
            <li className={styles._li}>
                <div className={styles._module_item}>
                    <a href={'/case-studies/worknmates'}>
                        <div className={styles._cases_background}>
                            <img
                                alt={'img'}
                                className={styles._logo}
                                src={
                                    'https://aicore.com.ar/wp-content/uploads/2021/05/cliente-worknmates.jpg'
                                }
                            />
                        </div>
                    </a>

                    <h2 className={styles._title}>Worknmates</h2>

                    <ul className={styles._list_filters}>
                        <li className={styles._item_filter}>React</li>
                        <li className={styles._item_filter}>Node</li>
                        <li className={styles._item_filter}>Booking de Servicios</li>
                    </ul>
                    <p className={styles._subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga aliquid
                        cum molestiae mollitia, atque voluptate asperiores voluptatibus officiis
                        ipsa, autem impedit pariatur? Eveniet porro architecto sint cumque id
                        possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                        repellat tempora nam quos maxime ipsum quasi iure, molestiae nisi, ab
                        blanditiis beatae quaerat sint aspernatur magnam minus tenetur corrupti
                        obcaecati.
                    </p>
                </div>

                <div className={styles._module_item}>
                    <a href={'/case-studies/bukest'}>
                        <div className={styles._cases_background}>
                            <img
                                alt={'img'}
                                className={styles._logo}
                                src={
                                    'https://aicore.com.ar/wp-content/uploads/2022/07/Bukest-g.png'
                                }
                            />
                        </div>
                    </a>

                    <h2 className={styles._title}>Bukest</h2>

                    <ul className={styles._list_filters}>
                        <li className={styles._item_filter}>React</li>
                        <li className={styles._item_filter}>Nest</li>
                        <li className={styles._item_filter}>React Native</li>
                        <li className={styles._item_filter}>Booking de Servicios</li>
                    </ul>
                    <p className={styles._subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga aliquid
                        cum molestiae mollitia, atque voluptate asperiores voluptatibus officiis
                        ipsa, autem impedit pariatur? Eveniet porro architecto sint cumque id
                        possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                        repellat tempora nam quos maxime ipsum quasi iure, molestiae nisi, ab
                        blanditiis beatae quaerat sint aspernatur magnam minus tenetur corrupti
                        obcaecati.
                    </p>
                </div>
            </li>
        </ul>
    );
}
