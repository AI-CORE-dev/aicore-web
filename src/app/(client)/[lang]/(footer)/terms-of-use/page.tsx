import React from 'react';

import styles from './page.module.css';

export default function TermOfUse() {
    return (
        <main className={styles._inner}>
            <h1 className={styles._title}>TÉRMINOS Y CONDICIONES DE USO</h1>
            <p
                className={styles._item}
                style={{
                    paddingBottom: '30px',
                }}
            >
                Por favor, lee atentamente estos términos y condiciones antes de utilizar nuestro
                sitio <a href={'https://www.aicore.com.ar'}>www.aicore.com.ar</a> (en adelante sitio
                web):
            </p>

            <ul>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>a). Aceptación de los Términos: </strong>
                        Al utilizar este sitio web, aceptas cumplir con los Términos y Condiciones
                        de uso aquí descriptos. Consecuentemente, quien no acepte los Términos y
                        Condiciones debe abstenerse de utilizarlo.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>b). Uso adecuado del sitio web: </strong>
                        Este sitio web es destinado únicamente para uso personal y no comercial. No
                        se permite el uso indebido del sitio, incluyendo la violación de leyes
                        locales o internacionales relacionadas.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>c). Propiedad Intelectual: </strong>
                        Todos los contenidos de este sitio, incluyendo, pero no limitado a textos,
                        gráficos, logos, imágenes, y software, están protegidos por leyes de
                        propiedad intelectual y son propiedad exclusiva de AI CORE S.A.S. (en
                        adelante AI CORE). Los mismos se muestran al sólo efecto ilustrativo, y a
                        modo de referencia, pudiendo la misma diferir al momento en que se realice
                        cada visualización. El diseño, programación y funcionamiento del sitio web
                        es propiedad exclusiva de AI CORE y está protegida por las leyes de la
                        República Argentina y tratados internacionales sobre propiedad intelectual y
                        derechos de autor.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>d). Enlaces a Terceros: </strong>
                        Este sitio web puede contener enlaces a sitios web de terceros, AI CORE no
                        tiene control sobre el contenido o las prácticas de privacidad de esos
                        sitios, por lo que no se hace responsable de ellos. Compruebe las
                        condiciones de uso y las declaraciones de privacidad de dichos terceros
                        antes de utilizar y proporcionar cualquier información a los sitios y
                        programas de estos.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>e). Limitación de Responsabilidad: </strong>
                        El uso de este sitio web responsabilidad del usuario. AI CORE no tiene
                        responsabilidad de cualquier daño que pueda surgir del uso de este sitio. AI
                        CORE no se responsabiliza por daños ocasionados por virus, programas
                        maliciosos en los contenidos y/o cualquier otro agente que pueda llegar a
                        infectar o afectar de cualquier modo el o los sistemas de computación
                        utilizados por el usuario.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>f). Modificaciones: </strong>
                        AICORE se reserva el derecho de modificar estos Términos y Condiciones en
                        cualquier momento. Es responsabilidad del usuario revisar periódicamente los
                        mismos para estar al tanto de cualquier cambio.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>g). Ley Aplicable: </strong>
                        En el supuesto de controversias, estos términos y condiciones se rigen por
                        las leyes vigentes en la República Argentina y competente la Justicia
                        Ordinaria con asiento en la Ciudad de Buenos Aires, excluyendo cualquier
                        otro fuero y/o jurisdicción.
                    </p>
                </li>
            </ul>
        </main>
    );
}
