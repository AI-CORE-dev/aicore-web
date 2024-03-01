import type { SupportedLangs } from '@/lang/getDictionary';

import { Header } from '@/components/organisms/Header';
import {
    HowWeCanHelp,
    ClientsReview,
    CompaniesWePromote,
    PartnerShip,
    InstitutuionalVideo,
    ScheduleCall,
    Recognition,
} from '@/components/molecules';
import { getDictionary } from '@/lang/getDictionary';

import styles from './page.module.css';

export default async function Home({ params }: { params: { lang: SupportedLangs } }) {
    // const { lang } = params;

    // const isValidLang = ['es', 'en'].includes(lang);
    // const selectedLang = isValidLang ? lang : 'es';

    const dictionary = await getDictionary(params.lang);

    // if (!dictionary) {
    //     console.log('Error loading dictionary');
    // }

    return (
        <>
            <Header
                isButtonSecondary
                isHome
                isVideo
                subtitle={dictionary.header_home.subtitle}
                textButton={dictionary.header_home.button}
                textButtonSecondary={dictionary.header_home.text}
                title={dictionary.header_home.title}
            />

            <main className={styles._main}>
                <HowWeCanHelp />
                <InstitutuionalVideo />
                <CompaniesWePromote />
                <PartnerShip />
                <ClientsReview />
                <Recognition />
                <ScheduleCall />
            </main>
        </>
    );
}
