'use client';

import { Header } from '@/components/organisms/Header';
import { HowWeCanHelp } from '@/components/molecules/HowWeCanHelp';
import { CompaniesWePromote } from '@/components/molecules/CompaniesWePromote';
import { ClientsReview } from '@/components/molecules/ClientsReview';
import { ScheduleCall } from '@/components/molecules/ScheduleCall';

import styles from './page.module.css';

const dh = {
    title: 'Soluciones tecnológicas para desarrollar tus proyectos organizacionales interna o externamente',
    subtitle:
        'De manera regional acompañamos en cada paso, desde la formulación dela solución para alcanzar tus objetivos hasta la entrega delproyecto totalmente desarrollado a medida.',
    textButton: 'Contactanos',
    textButtonSecondary: 'Agenda una reunión de 30 minutos sin cargo con un ejecutivo de ventas',
};

export default function Home() {
    return (
        <>
            <Header
                isButtonSecondary
                isHome
                isVideo
                subtitle={dh.subtitle}
                textButton={dh.textButton}
                textButtonSecondary={dh.textButtonSecondary}
                title={dh.title}
            />

            <main className={styles._main}>
                {/* Seccion de como podemos ayudarte */}
                <HowWeCanHelp />

                {/* Seccion de Companias que potenciamos */}
                <CompaniesWePromote />

                {/* Seccion de review clientes */}
                <ClientsReview />

                {/* Seccion para agendar una llamada */}
                <ScheduleCall />
            </main>
        </>
    );
}
