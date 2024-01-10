import React from 'react';

import styles from './styles/footer.module.css';

export function Footer() {
    return (
        <footer className={styles._wave_container}>
            <div className={styles._wave}>
                <div className={styles._container_info}>
                    <div className={styles._column}>
                        {LINKS.map((redirection) => (
                            <li key={redirection.id} className={styles._item}>
                                <a
                                    className={
                                        redirection.id === 0 ? styles._title : styles._redirections
                                    }
                                    href={redirection.href}
                                >
                                    {redirection.title}
                                </a>
                            </li>
                        ))}
                    </div>

                    <div className={styles._column}>
                        {TECHNOLOGIES.map((tecnology) => (
                            <li key={tecnology.id} className={styles._item}>
                                <p
                                    className={
                                        tecnology.id === 0 ? styles._title : styles._redirections
                                    }
                                >
                                    {tecnology.title}
                                </p>
                            </li>
                        ))}
                    </div>

                    <div className={styles._column}>
                        <p className={styles._title}>Oficinas</p>
                        <p className={styles._subtitle}>Calle falsa 123</p>
                    </div>

                    <div className={styles._column}>
                        <p className={styles._title}>Conversemos</p>
                        <p className={styles._subtitle}>+123456789</p>
                        <p className={styles._subtitle}>contacto@aicore.com</p>
                    </div>
                </div>
                <div className={styles._container_social}>
                    <div className={styles._container_copy}>
                        <p className={styles._copyrigth}>© 2018-2024 AI CORE.</p>
                    </div>

                    <div className={styles._container_terms}>
                        <a className={styles._modules_terms} href={'/terms-of-use'}>
                            Terminos y Condiciones
                        </a>
                        <a className={styles._modules_terms} href={'/privacy-policy'}>
                            Politicas de Privacidad
                        </a>
                        <a className={styles._modules_terms} href={'/slavery-statement-policy'}>
                            Politica de esclavitud moderna
                        </a>
                        <a className={styles._modules_terms} href={'/supply-chain-policy'}>
                            Politica de cadena de suministros
                        </a>
                    </div>

                    <div className={styles._container_icon}>
                        {SOCIAL.map((social) => (
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
                        ))}
                    </div>
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
    { id: 4, title: 'Industrias', href: '/industries' },
    { id: 5, title: 'Tecnologias', href: '/technologies' },
    { id: 6, title: 'Blog', href: '/blog' },
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

const SOCIAL = [
    {
        id: 0,
        title: 'Facebook',
        href: 'https://www.facebook.com/aicore.ok',
        src: '/footer/1.png',
    },
    {
        id: 1,
        title: 'Github',
        href: '',
        src: '/footer/2.png',
    },
    {
        id: 2,
        title: 'Linkedin',
        href: 'https://www.linkedin.com/company/aicore-ok',
        src: '/footer/3.png',
    },
    { id: 3, title: 'Behance', href: '', src: '/footer/4.png' },
    {
        id: 4,
        title: 'Instagram',
        href: 'https://www.instagram.com/aicore.ok/',
        src: '/footer/5.png',
    },
    { id: 5, title: 'Twitter', href: '', src: '/footer/6.png' },
    {
        id: 6,
        title: 'Medium',
        href: '',
        src: '/footer/7.png',
    },
];
