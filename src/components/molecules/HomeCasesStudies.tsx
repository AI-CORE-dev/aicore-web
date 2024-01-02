import { SelectSearchCases } from '../modals';
import { CardsCases } from '../modals/CardCases';

import styles from './styles/home-cases-studies.module.css';

export function HomeCasesStudies() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <SelectSearchCases />
                <CardsCases />
            </div>
        </section>
    );
}
