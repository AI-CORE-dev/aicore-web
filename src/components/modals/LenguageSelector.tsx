'use client';
import { useState, useEffect } from 'react';

import styles from './styles/lenguage-selector.module.css';

interface Languages {
    code: string;
    flag: string;
    desc: string;
}

export function LanguageSelector() {
    const [showLanguages, setShowLanguages] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || 'es';
    });

    //     if (typeof localStorage !== 'undefined') {
    //         return localStorage.getItem('selectedLanguage') || 'es';
    //     } else {
    //         return 'es'; // o cualquier otro idioma por defecto
    //     }
    // });

    const languages: Languages[] = [
        { code: 'es', flag: 'es', desc: 'esp' },
        { code: 'en', flag: 'en', desc: 'eng' },
    ];

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);

    const toggleLanguages = () => {
        setShowLanguages(!showLanguages);
    };

    const selectLanguage = (code: string) => {
        setSelectedLanguage(code);
        setShowLanguages(false);

        let newPath;
        const currentPath = window.location.pathname;

        /*** Al volver a redireccionarse, el idioma queda guardado en el local pero no se actualiza el idioma de la página ***/
        if (currentPath === '/' || currentPath === '/es' || currentPath === '/en') {
            // Si estamos en la home se actualiza la ruta con el código de idioma
            newPath = `/${code}`;
        } else {
            // Para otras páginas, reemplaza el código de idioma en la ruta
            newPath = currentPath.replace(`/${selectedLanguage}/`, `/${code}/`);
        }

        window.history.pushState({}, '', newPath);
        window.location.reload();
    };

    return (
        <div className={styles._language_selector}>
            <button className={styles._language_btn} type={'button'} onClick={toggleLanguages}>
                <img alt={selectedLanguage} src={`/lang/${selectedLanguage}.png`} />
            </button>
            <ul className={`${styles._language_list} ${showLanguages ? styles._show : ''}`}>
                {languages.map((lang) => (
                    <li key={lang.code}>
                        <button type={'button'} onClick={() => selectLanguage(lang.code)}>
                            <img alt={lang.code} src={`/lang/${lang.flag}.png`} />
                            <p className={styles._text_code}>{lang.desc}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
