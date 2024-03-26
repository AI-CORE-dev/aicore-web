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
        src: '/logos/ameiz.svg',
    },
    {
        id: 1,
        src: '/logos/bukest.svg',
    },
    {
        id: 2,
        src: '/logos/offi.svg',
    },
    {
        id: 3,
        src: '/logos/Fiserv.svg',
    },
    {
        id: 4,
        src: '/logos/sodtrack.svg',
    },
    {
        id: 5,
        src: '/logos/Kinsu.svg',
    },
    {
        id: 6,
        src: '/logos/Biofingertips.png',
    },
    {
        id: 7,
        src: '/logos/santamaria.svg',
    },
    {
        id: 8,
        src: '/logos/aon.svg',
    },
    {
        id: 9,
        src: '/logos/sportyroom.svg',
    },
    {
        id: 0,
        src: '/logos/ameiz.svg',
    },
    {
        id: 1,
        src: '/logos/bukest.svg',
    },
    {
        id: 2,
        src: '/logos/offi.svg',
    },
    {
        id: 3,
        src: '/logos/Fiserv.svg',
    },
    {
        id: 4,
        src: '/logos/sodtrack.svg',
    },
    {
        id: 5,
        src: '/logos/Kinsu.svg',
    },
    {
        id: 6,
        src: '/logos/Biofingertips.png',
    },
    {
        id: 7,
        src: '/logos/santamaria.svg',
    },
    {
        id: 8,
        src: '/logos/aon.svg',
    },
    {
        id: 9,
        src: '/logos/sportyroom.svg',
    },
];
