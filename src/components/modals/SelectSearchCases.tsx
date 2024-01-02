import styles from './styles/select-search-cases.module.css';

export function SelectSearchCases() {
    return (
        <div className={styles._inner}>
            <form action={''} className={styles._form}>
                <div>
                    <select className={styles._select} id={'services'} name={'services'}>
                        <option value={''}>Todos los Servicios</option>
                        <option value={''}>Servicio 1</option>
                        <option value={''}>Servicio 2</option>
                        <option value={''}>Servicio 3</option>
                    </select>
                </div>
                <div>
                    <select className={styles._select} id={'technologies'} name={'technologies'}>
                        <option value={''}>Todas las Tecnologías</option>
                        <option value={''}>Tecnología 1</option>
                        <option value={''}>Tecnología 2</option>
                        <option value={''}>Tecnología 3</option>
                    </select>
                </div>
                <div>
                    <select className={styles._select} id={'industries'} name={'industries'}>
                        <option value={''}>Todas las Industrias</option>
                        <option value={''}>Industria 1</option>
                        <option value={''}>Industria 2</option>
                        <option value={''}>Industria 3</option>
                    </select>
                </div>
                <button className={styles._button}>Aplicar</button>
            </form>
        </div>
    );
}
