import React from 'react';

import styles from './styles/burger-icon.module.css';

interface IProps {
    onClick: () => void;
}

export function BurgerIcon({ onClick }: IProps) {
    return (
        <div className={styles._burger_menu} onClick={onClick}>
            <div className={styles._bar} />
            <div className={styles._bar} />
            <div className={styles._bar} />
        </div>
    );
}
