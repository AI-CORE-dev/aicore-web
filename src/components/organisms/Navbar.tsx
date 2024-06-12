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
            <Link href={'/'}>
                {/*FIXME*/}
                <img
                    alt={'aicore-logo'}
                    className={styles._img_logo_desktop}
                    height={50}
                    src={'/images/Logo-Aicore-co.png'}
                    width={150}
                />
                <img
                    alt={'fav-logo'}
                    className={styles._img_logo_mobile}
                    height={50}
                    src={'/images/Logo-Favicon-Aicore.png'}
                    width={50}
                />
            </Link>

            <MenuDesktop />

            <MenuMobile />
        </nav>
    );
}
