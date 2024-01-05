import styles from './styles/type-of-work.module.css';

export function TypeOfWork() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h3 className={styles._title}>Estos son los proyectos que desarrollamos </h3>
                <div className={styles._content}>
                    <p className={styles._text}>
                        No importa la clase de producto que estés constrendo. En AI CORE podemos
                        desarrollar para cualquier industría, nuestros expertise reside en el
                        desarrollo de productos a travez de metodologías ágiles logrando así
                        flexibilidad y calidad para cumplir cualquier requisito.
                    </p>
                    <ul className={styles._ul_options}>
                        <li className={styles._li_option}>Desarrollo de MVPs</li>
                        <li className={styles._li_option}>
                            Splitting monoliths into microservices
                        </li>
                        <li className={styles._li_option}>Migraciones tecnológicas</li>
                        <li className={styles._li_option}>Desarrollo de nuevas funcionalidades</li>
                        <li className={styles._li_option}>
                            Desarrollo de proyectos a largo plazo{' '}
                        </li>
                        <li className={styles._li_option}>Soporte y mantenimiento evolutivo</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
