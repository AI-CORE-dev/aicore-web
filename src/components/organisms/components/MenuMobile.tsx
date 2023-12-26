import { useState } from 'react';

import { PAGES, SERVICES } from '@/helpers/consts';
import { BurgerIcon } from '@/components/atoms/BurgerIcon';

import styles from '../styles/nav-bar.module.css';

export function MenuMobile() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={styles._container_menu_burger}>
                <BurgerIcon onClick={handleBurgerClick} />
            </div>

            {isMenuOpen ? (
                <div className={styles._menu_overlay}>
                    <div className={styles._cancel_icon} onClick={handleBurgerClick} />
                    <ul className={styles._menu_links}>
                        {PAGES.map((page) => (
                            <li key={page.href}>
                                {page.id === 2 ? (
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
                </div>
            ) : null}
        </>
    );
}
