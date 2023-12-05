'use client';

import React from 'react';
import Link from 'next/link';

import { useScrollNavbar } from '@/hooks/useScrollNavbar';

import styles from './styles/nav-bar.module.css';

export function Navbar() {
    const { scrolled } = useScrollNavbar();

    return (
        <nav className={`${styles['_nav-container']} ${scrolled ? styles.scrolled : ''}`}>
            <Link href={'/'}>
                <img
                    alt={'aicore-logo'}
                    height={40}
                    src={'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Aicore-co.png'}
                    width={120}
                />
            </Link>

            <div className={styles['_container-links']}>
                <button className={styles._button}>Contactanos</button>

                <ul className={styles._ul}>
                    {PAGES.map((page) => (
                        <li key={page.href}>
                            <Link legacyBehavior href={page.href}>
                                <a className={styles._link}>{page.text}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

const PAGES = [
    { text: 'Sobre Nosotros', href: '/about' },
    { text: 'Carrera', href: '/careers' },
    { text: 'Servicio', href: '/services' },
];
