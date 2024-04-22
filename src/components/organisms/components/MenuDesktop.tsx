import { CPAGES } from '@/helpers/consts';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import { LanguageSelector } from '@/components/modals/LenguageSelector';

import styles from '../styles/nav-bar.module.css';

import { ContainerNavCollapse } from './ContainerNavCollapse';

export function MenuDesktop() {
    const { scrolled } = useScrollNavbar();

    return (
        <div className={styles._container_links}>
            <ul className={styles._list_links}>
                {CPAGES.map((page) => {
                    return (
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
                    );
                })}
            </ul>

            <div className={styles._container_langs_button}>
                <a
                    className={
                        scrolled ? `${styles._button} ${styles._button_scrolled}` : styles._button
                    }
                    href={'/contact'}
                >
                    Contactanos
                </a>
                <LanguageSelector />
            </div>
        </div>
    );
}
