import React from 'react';
import Image from 'next/image';

import { TabsCarouselComponent } from '../modals';

import styles from './styles/companies-we-promote.module.css';

export function CompaniesWePromote() {
    return (
        <section className={styles._section}>
            <div>
                <div className={styles._section_info}>
                    <div className={styles._inner}>
                        <h2 className={styles._title}>Industrias en las que agregamos valor</h2>
                    </div>

                    <TabsCarouselComponent />
                </div>
            </div>
        </section>
    );
}
