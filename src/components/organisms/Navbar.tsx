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
                    height={50}
                    src={'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Aicore-co.png'}
                    width={150}
                />
            </Link>

            <div className={styles['_container-links']}>
                {/* <button className={styles._button}>Contactanos</button> */}

                <ul className={styles._list_links}>
                    {PAGES.map((page) => (
                        <li key={page.href}>
                            {page.id === 2 ? (
                                <div>
                                    <p className={styles._button_services}>Servicios</p>
                                    <ul className={styles._ul}>
                                        {SERVICES.map((service) => (
                                            <li key={service.href} className={styles._li}>
                                                <a
                                                    className={styles._link_hover}
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
        </nav>
    );
}

const PAGES = [
    { id: 0, text: 'Sobre Nosotros', href: '/about-us' },
    { id: 1, text: 'Carrera', href: '/careers' },
    { id: 2, text: 'Servicio', href: '/services' },
];

const SERVICES = [
    { id: 0, text: 'Staff Augmentation', href: '/services/staff-augmentation' },
    { id: 1, text: 'Consultoría', href: '/services/consultancy' },
    { id: 2, text: 'MVPaaS', href: '/services/MVPaaS' },
    { id: 3, text: 'Outsourcing', href: '/services/outsourcing' },
];
