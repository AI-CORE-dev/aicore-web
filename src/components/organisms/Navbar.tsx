'use client';

import React from 'react';
import Link from 'next/link';

import { useScrollNavbar } from '@/hooks/useScrollNavbar';

import styles from './styles/nav-bar.module.css';
import { MenuDesktop } from './components/MenuDesktop';
import { MenuMobile } from './components/MenuMobile';

export function Navbar() {
    const { scrolled } = useScrollNavbar();

    return (
        <nav className={`${styles._nav_container} ${scrolled ? styles.scrolled : ''}`}>
            <img
                alt={'aicore-logo'}
                className={styles._img_logo_desktop}
                height={50}
                src={'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Aicore-co.png'}
                width={150}
            />
            <img
                alt={'fav-logo'}
                className={styles._img_logo_mobile}
                height={50}
                src={'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png'}
                width={50}
            />
        </nav>
    );
}
