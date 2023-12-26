import { PAGES, SERVICES } from '@/helpers/consts';

import styles from '../styles/nav-bar.module.css';

export function MenuDesktop() {
    return (
        <div className={styles._container_links}>
            <ul className={styles._list_links}>
                {PAGES.map((page) => (
                    <li key={page.href}>
                        {page.id === 3 ? (
                            <div>
                                <p className={styles._button_services}>Servicios</p>
                                <ul className={styles._ul_services}>
                                    {SERVICES.map((service) => (
                                        <li key={service.href} className={styles._li}>
                                            <a
                                                className={styles._link_services}
                                                href={service.href}
                                            >
                                                {service.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <a className={styles._link} href={page.href}>
                                {page.text}
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            <button className={styles._button}>Contactanos</button>
        </div>
    );
}
