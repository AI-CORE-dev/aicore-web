import styles from './styles/type-of-work.module.css';

export function TypeOfWork() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h3 className={styles._title}>Lorem ipsum dolor sit amet consectetur</h3>
                <div className={styles._content}>
                    <p className={styles._text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi commodi ut
                        dolore, eligendi ipsam officiis fuga nulla. Quisquam temporibus minima,
                        ducimus maxime asperiores, sed consequuntur, ipsa nesciunt minus at nisi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                        provident dolore magnam facere vitae tempora, soluta maiores, ea, dolores
                        ipsum corporis rerum consectetur. Minus accusantium sed blanditiis, corrupti
                        atque officia.
                    </p>
                    <ul className={styles._ul_options}>
                        <li className={styles._li_option}>MVP development</li>
                        <li className={styles._li_option}>
                            Splitting monoliths into microservices
                        </li>
                        <li className={styles._li_option}>Cloud migration assistance</li>
                        <li className={styles._li_option}>New functionality development</li>
                        <li className={styles._li_option}>Long-term project development</li>
                        <li className={styles._li_option}>Support and maintenance</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
