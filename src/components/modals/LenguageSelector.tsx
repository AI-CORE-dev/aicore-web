'use client';
import { useState, useEffect } from 'react';

import styles from './styles/lenguage-selector.module.css';

export function LanguageSelector() {
    const [showLanguages, setShowLanguages] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || 'es';
    });

    const languages = [
        { code: 'es', flag: 'es' },
        { code: 'en', flag: 'en' },
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
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
