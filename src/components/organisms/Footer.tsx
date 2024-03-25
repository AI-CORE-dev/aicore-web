import React from 'react';

import styles from './styles/footer.module.css';

export function Footer() {
    return (
        <footer className={styles._wave_container}>
            <div className={styles._wave}>
                <div className={styles._container_social}>
                    <div className={styles._container_copy}>
                        <p className={styles._copyrigth}>© 2024 AI CORE.</p>
                    </div>

                    <div className={styles._container_icon}>
                        {SOCIAL.map(
                            (social) =>
                                social.active && (
                                    <span key={social.id}>
                                        <a href={social.href}>
                                            <img
                                                alt={social.title}
                                                className={styles._img}
                                                height={30}
                                                src={social.src}
                                                style={{
                                                    marginRight: social.id === 6 ? 0 : 20,
                                                }}
                                                width={30}
                                            />
                                        </a>
                                    </span>
                                ),
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

const LINKS = [
    { id: 0, title: 'Menu', href: '/' },
    { id: 1, title: 'Nosotros', href: '/about-us' },
    { id: 3, title: 'Industrias', href: '/industries' },
    { id: 3, title: 'Servicios', href: '/services' },
    { id: 4, title: 'Tecnologias', href: '/technologies' },
    { id: 5, title: 'Proyectos', href: '/cases-studies' },
    { id: 6, title: 'Carreras', href: '/careers' },
    { id: 7, title: 'Blog', href: '/blog' },
];

const TECHNOLOGIES = [
    { id: 0, title: 'Tecnologías' },
    { id: 1, title: 'Next.JS' },
    { id: 2, title: 'Node.JS' },
    { id: 3, title: 'React-Native' },
    { id: 4, title: 'React' },
];

const SOCIAL = [
    {
        id: 0,
        title: 'Facebook',
        href: 'https://www.facebook.com/aicore.ok',
        src: '/footer/1.png',
        active: false,
    },
    {
        id: 1,
        title: 'Github',
        href: '',
        src: '/footer/2.png',
        active: false,
    },
    {
        id: 2,
        title: 'Linkedin',
        href: 'https://www.linkedin.com/company/aicore-ok',
        src: '/footer/3.png',
        active: true,
    },
    { id: 3, title: 'Behance', href: '', src: '/footer/4.png', active: false },
    {
        id: 4,
        title: 'Instagram',
        href: 'https://www.instagram.com/aicore.ok/',
        src: '/footer/5.png',
        active: true,
    },
    { id: 5, title: 'Twitter', href: '', src: '/footer/6.png', active: false },
    {
        id: 6,
        title: 'Medium',
        href: '',
        src: '/footer/7.png',
        active: false,
    },
];
