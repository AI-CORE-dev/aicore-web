'use client';

import type { MouseEventHandler } from 'react';

import {
    EmotionValue1,
    EmotionValue2,
    EmotionValue3,
    EmotionValue4,
    EmotionValue5,
} from '@/assets/svg/rating';
import { CVALUES } from '@/helpers/consts';

import styles from './styles/article-body.module.css';

export function ArticleBody() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._container_info}>
                    <div className={styles._text_time}>7 min</div>

                    <div className={styles._container_redes}>
                        <button className={styles._btn} type={'button'}>
                            <span
                                className={`${styles._share_module} ${styles._share_module_fb}`}
                            />
                        </button>
                        <button className={styles._btn} type={'button'}>
                            <span
                                className={`${styles._share_module} ${styles._share_module_li}`}
                            />
                        </button>
                        <button className={styles._btn} type={'button'}>
                            {' '}
                            <span
                                className={`${styles._share_module} ${styles._share_module_tw}`}
                            />
                        </button>
                    </div>
                </div>

                <div className={styles._container_text}>
                    <p className={styles._text}>
                        Shift Left es un termino utilizado para describir la practica de “testear
                        antes o prepararse antes para el testing”, tiene su origen en desplazar a la
                        izquierda las tareas vinculadas con Testing en una línea de tiempo. Es una
                        práctica destinada a identificar y abordar defectos y áreas de mejora lo
                        antes posible en el ciclo de vida de la entrega de software. En lugar de
                        validar la calidad en una etapa de tiempo posterior en el ciclo de vida,
                        este enfoque permite pruebas rápidas y confiables en todas las disciplinas:
                        unitaria, funcional, API, rendimiento, seguridad, integración, etc. El
                        objetivo es permitir pruebas rigurosas que se ajusten al mismo ciclo, sprint
                        o iteración y, al mismo tiempo, permitir que todos los interesados,
                        incluidos los tradicionalmente ubicados a la «derecha», se mantengan
                        alineados y sean flexibles.
                    </p>
                    <h2 className={styles._text}>Desafíos claves</h2>
                    <p className={styles._text}>
                        Si bien Shif Left trae enormes beneficios, muchas organizaciones están
                        luchando para que sea una realidad. Desde habilidades y metodologías hasta
                        cambios culturales son los desafíos, una encuesta incluida en el “Continuos
                        Testing Report 2020” [1],en el que basamos este y otros artículos que les
                        haremos llegar revela las tendencias y las barreras para la adopción. En la
                        encuesta de este año (Fig. 1), encontramos que más de la mitad (56%) de los
                        encuestados declararon que encuentran las pruebas dentro del propio sprint
                        muy desafiantes por los siguientes motivos:
                    </p>
                    <ol>
                        <li>
                            <p className={styles._text}>
                                Requisitos o historias de usuarios mal definidas, y la complejidad
                                para mantener múltiples versiones de requisitos, conducen a errores
                                de codificación y Testing ineficiente.
                            </p>
                        </li>
                        <li>
                            <p className={styles._text}>
                                En los últimos dos años, alrededor de dos tercios de todos los
                                encuestados (67% este año) dijeron que diseñar y mantener casos de
                                prueba significativos que se alineen con las expectativas del
                                usuario es un desafío importante al implementar pruebas continuas.
                                Algunos encuestados han estado compartiendo dificultades asociadas
                                con la comprensión y la creación de casos de prueba a partir de
                                requisitos basados en texto, con el riesgo de diseñar casos de
                                prueba incorrectos.
                            </p>
                        </li>
                        <li>
                            <p className={styles._text}>
                                El mantenimiento de los scripts de prueba todavía, construidos en
                                forma temprana absorbe una parte desproporcionada de la inversión en
                                automatización.
                            </p>
                        </li>
                        <li>
                            <p className={styles._text}>
                                Los datos y entornos de prueba son los mayores impedimentos para la
                                automatización temprana.
                            </p>
                        </li>
                        <li>
                            <p className={styles._text}>
                                El personal calificados es escaso: el 62% dice que tiene problemas
                                para encontrar profesionales calificados para desarrollar su
                                estrategia de prueba continua.
                            </p>
                        </li>
                        <li>
                            <p className={styles._text}>
                                La incorporación de pruebas no funcionales como parte de la
                                secuencia se pasa por alto regularmente. Por ejemplo, las pruebas de
                                rendimiento son una parte importante del espectro de prueba, pero
                                casi dos tercios de nuestros encuestados lo consideran muy
                                desafiante (63%).
                            </p>
                        </li>
                    </ol>
                    <p className={styles._text}>
                        Si aceptamos que un aspecto implícito de Shift Left es la capacidad de
                        reconocer y satisfacer las necesidades y expectativas de los usuarios
                        finales desde una etapa temprana, nuestra encuesta resalta otros problemas.
                    </p>
                    <img
                        alt={'img_blog'}
                        src={'https://gestionit.com.ar/wp-content/uploads/2020/05/fig1.png'}
                    />

                    <h2 className={styles._text}>
                        El auge de las pruebas basadas en modelos (MBT)
                    </h2>
                    <p className={styles._text}>
                        Las pruebas basadas en modelos (MBT) son una parte importante de una
                        estrategia de Shift Left. En términos simples, implica la generación de
                        escenarios de prueba utilizando modelos del sistema como entradas. Los
                        ejemplos de modelos incluyen especificaciones técnicas como diagramas de
                        flujo, especificaciones de lenguaje de modelado unificado (UML) y flujos de
                        procesos. Cada vez más, las herramientas MBT tienen motores de script
                        integrados para la generación automática de scripts de prueba. Capturan
                        componentes, elementos de pantalla y acciones del usuario en formatos de
                        acción, destino y tipo de destino, y esto se puede pasar al motor de script
                        para la generación de script de prueba en varios formatos.
                    </p>
                    <p className={styles._text}>
                        Debido a que Shift Left Testing se lleva a cabo al principio del proceso de
                        desarrollo, depende en gran medida de la capacidad de comprender los
                        resultados requeridos desde el principio. Este conocimiento es crítico para
                        Shift Left en general, y para las pruebas basadas en modelos (MBT) en
                        particular.
                    </p>
                    <p className={styles._text}>
                        Los analistas de negocios y los gerentes de productos no necesariamente
                        deben escribir una historia de usuario, sino que pueden construir un flujo
                        completo de esa historia basado en requisitos utilizando modelos de
                        sistemas. Esto eliminaría cualquier ambigüedad de interpretación: los
                        equipos podrían probar antes, probar más rápido y encontrar defectos antes.
                        El modelo resultante puede crear una cobertura completa de requisitos de
                        casos de prueba que no solo crea la prueba en sí, sino que facilita el
                        mantenimiento.
                    </p>
                    <p className={styles._text}>
                        Vemos una tendencia creciente de escribir historias de usuarios basadas en
                        el comportamiento del usuario final en la encuesta, y el 36% de los
                        encuestados dijeron que han adoptado un enfoque BDD.
                    </p>
                    <p className={styles._text}>
                        Para que este enfoque se use de manera eficiente, estamos observando un
                        énfasis creciente en capacitar a los equipos en la creación de historias de
                        usuarios en el formato BDD, para establecer cierta coherencia del enfoque y
                        obtener beneficios de velocidad para probar. En la encuesta de este año, es
                        difícil saber cuántos siguen un enfoque estructurado y cuántos no.
                    </p>
                    <p className={styles._text}>
                        El desarrollo impulsado por el comportamiento (BDD) se ha convertido en un
                        puente entre el usuario y las vistas del sistema. En este método, los
                        criterios de aceptación se basan tanto en la vista del usuario del sistema
                        como en el comportamiento del sistema. El concepto detrás de BDD es definir
                        criterios de aceptación en un formato, como Gherkin, que es comprobable y
                        puede automatizarse.
                    </p>
                    <p className={styles._text}>
                        En breve dedicaremos un artículo completo a Gherkin.
                    </p>
                    <p className={styles._text}>Hasta pronto!</p>
                </div>
            </div>

            {/* <div className={styles._banner}>
                <p className={styles._text_banner}>
                    Unde alias mollitia, perferendis dicta cum praesentium voluptate odio eaque.
                </p>
                <h2 className={styles._title_banner}>Lorem ipsum dolor sit.</h2>
                <a className={styles._btn_banner} href={'/contact'}>
                    Contactanos
                </a>
            </div> */}

            <div className={styles._container_reviews}>
                <div style={{ display: 'flex' }}>
                    <div className={styles._circle_rating}>4.2</div>
                    <div>
                        <div className={styles._title_rating}>
                            Gracias por leer, dejanos tu opinion
                        </div>
                        <div className={styles._rating}>3985 opiniones</div>
                    </div>
                </div>

                <div>
                    {CVALUES.map((item) => {
                        const renderEmotion = (item: number, act: boolean) => {
                            switch (item) {
                                case 0:
                                    return <EmotionValue1 active={act} />;

                                case 1:
                                    return <EmotionValue2 active={act} />;

                                case 2:
                                    return <EmotionValue3 active={act} />;

                                case 3:
                                    return <EmotionValue4 active={act} />;

                                case 4:
                                    return <EmotionValue5 active={act} />;

                                default:
                                    break;
                            }
                        };

                        const handleClick = (id: number): MouseEventHandler<HTMLButtonElement> => {
                            return () => {
                                CVALUES.forEach((item) => {
                                    if (item.id === id) {
                                        item.active = true;
                                    } else {
                                        item.active = false;
                                    }
                                });
                            };
                        };

                        return (
                            <button
                                key={item.id}
                                className={styles._btn_emotion}
                                type={'button'}
                                onClick={handleClick(item.id)}
                            >
                                {renderEmotion(item.id, item.active)}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
