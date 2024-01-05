'use client';

import { useScrollNavbar } from '@/hooks/useScrollNavbar';

import styles from './styles/floating-button.module.css';

export function FloatingButton() {
    const { scrolled } = useScrollNavbar();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`${styles._floating_button} ${
                scrolled ? styles._floating_button_active : ''
            }`}
            onClick={scrollToTop}
        >
            <div className={styles._chevron} />
        </div>
    );
}
