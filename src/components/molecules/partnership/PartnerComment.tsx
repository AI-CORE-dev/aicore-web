import styles from './styles/partner-comment.module.css';

export function PartnerComment() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._qoute}>
                    &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
                    perspiciatis expedita porro voluptatibus natus quo totam quia consequuntur
                    cumque quisquam! Eos harum iusto nesciunt ratione tenetur neque enim animi
                    possimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea incidunt
                    quam distinctio soluta, vero delectus est cupiditate? Odio ab exercitationem
                    libero molestias officia excepturi molestiae. Et, enim. Minus, similique
                    dolor!&quot;
                </div>
                <div className={styles._header_title}>Ai Core IT Specialist</div>
                <div className={styles._header_subtitle}>Argentina, Buenos Aires</div>

                <a
                    className={styles._header_link}
                    href={'https://aicore.com.ar/'}
                    rel={'noopener'}
                    target={'_blank'}
                >
                    aicore.com
                </a>
            </div>
        </section>
    );
}
