import styles from './styles/slider-logo.module.css';

export function SliderLogos() {
    return (
        <section className={styles._section}>
            <div className={styles._slider}>
                <div className={styles._slider_track}>
                    <div className={styles._slide}>
                        {CIMAGES.map((item) => (
                            <img
                                key={item.id}
                                alt={'logo'}
                                className={styles._img}
                                src={item.src}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const CIMAGES = [
    {
        id: 0,
        src: '/logos/aon.svg',
    },
    {
        id: 1,
        src: '/logos/Biofingertips.png',
    },
    {
        id: 2,
        src: '/logos/bukest.svg',
    },
    {
        id: 3,
        src: '/logos/Fiserv.svg',
    },
    {
        id: 4,
        src: '/logos/Kinsu.png',
    },
    {
        id: 5,
        src: '/logos/OFFI.png',
    },
    {
        id: 6,
        src: '/logos/SportyRoom.png',
    },
    {
        id: 7,
        src: '/logos/aon.svg',
    },
    {
        id: 8,
        src: '/logos/Biofingertips.png',
    },
    {
        id: 9,
        src: '/logos/bukest.svg',
    },
    {
        id: 10,
        src: '/logos/Fiserv.svg',
    },
    {
        id: 11,
        src: '/logos/Kinsu.png',
    },
    {
        id: 12,
        src: '/logos/OFFI.png',
    },
    {
        id: 13,
        src: '/logos/SportyRoom.png',
    },
];
