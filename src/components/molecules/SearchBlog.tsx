import React from 'react';

import styles from './styles/search-blog.module.css';

export function SearchBlog() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._text}>Busqueda</h2>
                <div className={styles._container_input}>
                    <input
                        className={styles._input}
                        id={''}
                        name={''}
                        placeholder={'¿Que estas buscando?'}
                        type={'search'}
                    />
                </div>
            </div>
        </section>
    );
}
