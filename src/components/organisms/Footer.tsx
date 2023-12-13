import React from 'react';

import styles from './styles/footer.module.css';

export function Footer() {
    return (
        <footer className={styles['wave-container']}>
            <div className={styles.wave}>
                <div className={styles.column}>
                    {LINKS.map((redirection, index) => (
                        <li key={redirection.id} className={styles.item}>
                            <a
                                className={redirection.id === 0 ? styles.title : ''}
                                href={redirection.href}
                            >
                                {redirection.title}
                            </a>
                        </li>
                    ))}
                </div>

                <div className={styles.column}>
                    {TECHNOLOGIES.map((tecnology, index) => (
                        <li key={tecnology.id} className={styles.item}>
                            <a className={tecnology.id === 0 ? styles.title : ''}>
                                {tecnology.title}
                            </a>
                        </li>
                    ))}
                </div>

                <div className={styles.column}>
                    <p className={styles.title}>Oficinas</p>
                    <p className={styles.subtitle}>Calle falsa 123</p>
                    <p style={{ marginTop: '50px' }} />
                    <p className={styles.title}>Conversemos</p>
                    <p className={styles.subtitle}>+123456789</p>
                    <p className={styles.subtitle}>contacto@aicore.com</p>
                </div>
            </div>
        </footer>
    );
}

const LINKS = [
    { id: 0, title: 'Menu', href: '/' },
    { id: 1, title: 'Sobre Nosotros', href: '/about-us' },
    { id: 2, title: 'Carreras', href: '/careers' },
    { id: 3, title: 'Servicios', href: '/services' },
];

const TECHNOLOGIES = [
    { id: 0, title: 'Tecnologías' },
    { id: 1, title: 'React' },
    { id: 2, title: 'React-Native' },
    { id: 3, title: 'Angular' },
    { id: 4, title: 'Node.JS' },
    { id: 5, title: 'Next.JS' },
    { id: 6, title: 'Nest.JS' },
];
