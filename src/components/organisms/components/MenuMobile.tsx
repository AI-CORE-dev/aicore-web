import { useState } from 'react';

import { CPAGES } from '@/helpers/consts';
import { BurgerIcon } from '@/components/atoms/BurgerIcon';

import styles from '../styles/nav-bar.module.css';

import { ContainerNavCollapse } from './ContainerNavCollapse';

export function MenuMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
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
                        {CPAGES.map((page) => (
                            <li key={page.href}>
                                {page.isCollapse ? (
                                    <ContainerNavCollapse
                                        id={page.id}
                                        items={page.items}
                                        label={page.text}
                                    />
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
