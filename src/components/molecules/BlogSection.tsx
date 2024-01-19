import styles from './styles/blog-section.module.css';

export function BlogSection() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h3 className={styles._title}>Lea mas de nuestro blog</h3>

                <ul className={styles._list_cases}>
                    <li className={styles._li}>
                        <div className={styles._module_item}>
                            <a href={'/case-studies/worknmates'}>
                                <div className={styles._cases_background} />
                            </a>

                            <h2 className={styles._title_blog}>
                                El futuro de la fuerza laboral: combinación de equipos internos y
                                equipos aumentados: modelo híbrido
                            </h2>

                            <ul className={styles._list_filters}>
                                <li className={styles._item_filter}>React</li>
                                <li className={styles._item_filter}>Node</li>
                                <li className={styles._item_filter}>Booking de Servicios</li>
                            </ul>
                            <p className={styles._subtitle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga
                                aliquid cum molestiae mollitia, atque voluptate asperiores
                                voluptatibus officiis ipsa, autem impedit pariatur? Eveniet porro
                                architecto sint cumque id possimus? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Officiis repellat tempora nam quos
                                maxime ipsum quasi iure, molestiae nisi, ab blanditiis beatae
                                quaerat sint aspernatur magnam minus tenetur corrupti obcaecati.
                            </p>
                        </div>
                    </li>
                    <li className={styles._li}>
                        <div className={styles._module_item}>
                            <a href={'/case-studies/worknmates'}>
                                <div className={styles._cases_background} />
                            </a>

                            <h2 className={styles._title_blog}>
                                ¿Cuánto gastan las empresas tecnológicas en contratación?
                            </h2>

                            <ul className={styles._list_filters}>
                                <li className={styles._item_filter}>React</li>
                                <li className={styles._item_filter}>Node</li>
                                <li className={styles._item_filter}>Booking de Servicios</li>
                            </ul>
                            <p className={styles._subtitle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga
                                aliquid cum molestiae mollitia, atque voluptate asperiores
                                voluptatibus officiis ipsa, autem impedit pariatur? Eveniet porro
                                architecto sint cumque id possimus? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Officiis repellat tempora nam quos
                                maxime ipsum quasi iure, molestiae nisi, ab blanditiis beatae
                                quaerat sint aspernatur magnam minus tenetur corrupti obcaecati.
                            </p>
                        </div>
                    </li>
                    <li className={styles._li}>
                        <div className={styles._module_item}>
                            <a href={'/case-studies/worknmates'}>
                                <div className={styles._cases_background} />
                            </a>

                            <h2 className={styles._title_blog}>
                                Conseguir contrataciones tecnológicas con un presupuesto limitado:
                                un plan de contratación estratégico para tiempos de incertidumbre
                            </h2>

                            <ul className={styles._list_filters}>
                                <li className={styles._item_filter}>React</li>
                                <li className={styles._item_filter}>Node</li>
                                <li className={styles._item_filter}>Booking de Servicios</li>
                            </ul>
                            <p className={styles._subtitle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga
                                aliquid cum molestiae mollitia, atque voluptate asperiores
                                voluptatibus officiis ipsa, autem impedit pariatur? Eveniet porro
                                architecto sint cumque id possimus? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Officiis repellat tempora nam quos
                                maxime ipsum quasi iure, molestiae nisi, ab blanditiis beatae
                                quaerat sint aspernatur magnam minus tenetur corrupti obcaecati.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
