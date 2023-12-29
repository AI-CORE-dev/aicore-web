import React from 'react';

import styles from '../styles/container-nav-collapse.module.css';

interface IProps {
    id: number;
    label: string;
    items: { id: number; href: string; text: string }[];
}

export function ContainerNavCollapse({ label, items }: IProps) {
    return (
        <div>
            <p className={styles._button_services}>{label}</p>
            <ul className={`${styles._ul_services}`}>
                {items.map((item: { href: string; text: string }) => (
                    <li key={item.href} className={styles._li}>
                        <a className={styles._link_services} href={item.href}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
