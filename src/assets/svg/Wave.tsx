import styles from './styles/wave.module.css';

export function Wave({ animated = false }) {
    return (
        <svg
            style={{ transform: 'translateY(10px)' }}
            viewBox={'0 0 1440 320'}
            xmlns={'http://www.w3.org/2000/svg'}
        >
            <path
                d={
                    'M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,224C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                }
                fill={'#292929'}
                fillOpacity={'1'}
                id={animated ? styles.wavePath : null}
            />
        </svg>
    );
}
