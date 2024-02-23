import styles from './styles/modal-open-positions.module.css';

export function ModalOpenPositions() {
    return (
        <div className={styles._inner}>
            <div style={{ width: '100%' }}>
                <div className={styles._header}>
                    <p className={styles._name_position}>JR Business Analyst</p>
                </div>
                <p className={styles._name_position_short}>JR BA</p>
                <div className={styles._info}>
                    <div className={styles._container_row}>
                        <svg fill={'none'} height={'12'} viewBox={'0 0 12 12'} width={'12'}>
                            <path
                                clipRule={'evenodd'}
                                d={
                                    'M5 8H1C0.487164 8 0.0644928 7.61396 0.00672773 7.11662L0 7V1C0 0.487164 0.38604 0.0644928 0.883379 0.00672773L1 0H11C11.5128 0 11.9355 0.38604 11.9933 0.883379L12 1V7C12 7.51284 11.614 7.93551 11.1166 7.99327L11 8H7V10H9C9.55229 10 10 10.4477 10 11C10 11.5523 9.55229 12 9 12H3C2.44772 12 2 11.5523 2 11C2 10.4477 2.44772 10 3 10H5V8Z'
                                }
                                fill={'#AFB2B8'}
                                fillRule={'evenodd'}
                            />
                        </svg>
                        <ul
                            style={{
                                maxWidth: '250px',
                                marginRight: '35px',
                                listStyle: 'none',
                            }}
                        >
                            <li
                                style={{
                                    color: 'var(--black-color)',
                                    fontFamily: 'var(--font-mono)',
                                    marginLeft: '5px',
                                    fontWeight: '600',
                                }}
                            >
                                <p>+2 años de experiencia</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles._container_row}>
                        <svg fill={'none'} height={'16'} viewBox={'0 0 16 16'} width={'16'}>
                            <path
                                clipRule={'evenodd'}
                                d={
                                    'M8 2C10.7536 2 13 4.37767 13 7.32845C13 9.04361 11.5134 11.2084 8.31488 13.7526L8 14C4.58408 11.3485 3 9.09894 3 7.32845C3 4.37767 5.24638 2 8 2ZM8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5Z'
                                }
                                fill={'#AFB2B8'}
                                fillRule={'evenodd'}
                            />
                        </svg>
                        <ul
                            style={{
                                listStyle: 'none',
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            <li
                                style={{
                                    color: 'var(--black-color)',
                                    marginLeft: '5px',
                                    fontWeight: '600',
                                }}
                            >
                                Argentina - Remoto
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <p className={styles._subtitle}>Project Overview</p>
                <div>
                    <p className={styles._overview}>{CDATA.text}</p>
                </div>

                <p className={styles._subtitle}>Responsabilidades</p>
                <div>
                    <ul>
                        {CDATA.responsabilities.map((responsability) => (
                            <li key={responsability.id} className={styles._item}>
                                {responsability.text}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className={styles._subtitle}>Requerimientos</p>
                <div>
                    <ul>
                        {CDATA.requeriments.map((responsability) => (
                            <li key={responsability.id} className={styles._item}>
                                {responsability.text}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className={styles._subtitle}>Seria bueno tener</p>
                <div>
                    <ul>
                        {CDATA.otherHabilities.map((responsability) => (
                            <li key={responsability.id} className={styles._item}>
                                {responsability.text}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className={styles._subtitle}>Lo que ofrecemos</p>
                <div>
                    <ul>
                        {CDATA.offer.map((responsability) => (
                            <li key={responsability.id} className={styles._item}>
                                {responsability.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className={styles._title}>
                Siempre estamos buscando grandes talentos y personas ambiciosas.
            </p>
            <div className={styles._container_texts}>
                <p className={styles._subtitle}>Contacto</p>
                <a
                    className={`${styles._subtitle} ${styles._link}`}
                    href={'mailto:contacto@aicore.com'}
                >
                    Trabajemos juntos contacto@aicore.com
                </a>
            </div>

            <form action={''}>
                <div>
                    <div className={styles._container_input}>
                        <label className={styles._label} htmlFor={'name'}>
                            Nombre Completo
                        </label>
                        <input className={styles._input} id={'name'} name={'name'} type={'text'} />
                    </div>

                    <div className={styles._container_input}>
                        <label className={styles._label} htmlFor={'email'}>
                            Correo Electrónico
                        </label>
                        <input
                            className={styles._input}
                            id={'email'}
                            name={'email'}
                            type={'email'}
                        />
                    </div>

                    <div className={styles._container_input}>
                        <label className={styles._label} htmlFor={'position'}>
                            Posicion
                        </label>
                        <select className={styles._select} id={'position'} name={'position'}>
                            <option value={'1'}>Frontend</option>
                            <option value={'2'}>Backend</option>
                            <option value={'3'}>Fullstack</option>
                        </select>
                    </div>

                    <div className={styles._container_input}>
                        <label className={styles._label} htmlFor={'message'}>
                            Mensaje
                        </label>
                        <textarea
                            className={styles._textarea}
                            cols={10}
                            id={'message'}
                            name={'message'}
                            rows={10}
                        />
                    </div>
                    <div className={styles._drag_drop}>
                        <p className={styles._field_drag}>Subir archivo</p>
                        <input
                            accept={'.txt'}
                            id={'file'}
                            style={{ display: 'none' }}
                            type={'file'}
                        />
                        <p>Subir archivo</p>
                    </div>
                </div>
                <button className={styles._btn} type={'submit'}>
                    Aplicar Ahora
                </button>
            </form>
        </div>
    );
}

const CDATA = {
    title: 'JR Business Analyst',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, illo? Aut quisquam dignissimos sequi. Atque ex saepe pariatur fugiat optio est labore quos nihil officia dolores. Ut assumenda nisi officia?dolor sit amet consectetur adipisicing elit. Possimus, illo? Aut quisquam dignissimos sequi. Atque ex saepe pariatur fugiat optio est labore quos nihil officia dolores. Ut assumenda nisi officia',
    responsabilities: [
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 6,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet.',
        },
    ],
    requeriments: [
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 6,
            text: 'Lorem ipsum dolor sit amet.',
        },
    ],
    otherHabilities: [
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet.',
        },
    ],
    offer: [
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 6,
            text: 'Lorem ipsum dolor sit amet.',
        },
    ],
};
