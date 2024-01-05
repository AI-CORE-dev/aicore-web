import styles from './styles/why-opt-for-mvp.module.css';

export function WhyOptForMVP() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>WhyOptForMVP</h2>
                <p className={styles._subtitle}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ea placeat
                    aliquam, sapiente quo explicabo voluptatum consequuntur eum omnis pariatur ex
                    quod non numquam.
                </p>
                <ul className={styles._list}>
                    <li className={styles._item_list}>
                        <h4 className={styles._tile}>Boosted Time-to-Market</h4>
                        <p className={styles._text}>
                            Reach the market in a blink with a fully-functioning prototype and find
                            out whether your concept is viable and is in demand in the first place.
                            Keep track of the latest trends and{' '}
                            <span className={styles._span}>
                                satisfy your target audience’s needs
                            </span>
                            with a fast and agile-driven MVP
                        </p>
                    </li>

                    <li className={styles._item_list}>
                        <h4 className={styles._tile}>Cost-Efficient Strategy</h4>
                        <p className={styles._text}>
                            Based on the full-fledged business analysis,{' '}
                            <span className={styles._span}>
                                we define and prioritize only those functions that really matter.
                            </span>{' '}
                            That said, we spend less time on the development and build an MVP with a
                            limited scope of core features, thus saving your money.
                        </p>
                    </li>

                    <li className={styles._item_list}>
                        <h4 className={styles._tile}>Early Adopters</h4>
                        <p className={styles._text}>
                            Use an MVP and{' '}
                            <span className={styles._span}>
                                build some bridges with your potential clients
                            </span>{' '}
                            to get in-depth feedback. Find out their pain points through surveys and
                            interviews to end up with a successful, user-friendly product
                        </p>
                    </li>

                    <li className={styles._item_list}>
                        <h4 className={styles._tile}>Streamlined Investment</h4>
                        <p className={styles._text}>
                            Come up with our results-driven MVP to acquire early users and gain
                            product traction,{' '}
                            <span className={styles._span}>
                                thus increasing your chances to catch the eye of potential investors
                            </span>
                            . Show them your business idea they can evaluate and “touch”
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

const CTEXTS = [
    {
        id: 0,
        title: 'Boosted Time-to-Market',
        subtitle:
            'Reach the market in a blink with a fully-functioning prototype and find out whether your concept is viable and is in demand in the first place. Keep track of the latest trends and satisfy your target audience’s needs with a fast and agile-driven MVP.',
    },
    {
        id: 1,
        title: 'Early Adopters',
        subtitle:
            'Use an MVP and build some bridges with your potential clients to get in-depth feedback. Find out their pain points through surveys and interviews to end up with a successful, user-friendly product.',
    },
    {
        id: 2,
        title: 'Cost-Efficient Strategy',
        subtitle:
            'Based on the full-fledged business analysis, we define and prioritize only those functions that really matter. That said, we spend less time on the development and build an MVP with a limited scope of core features, thus saving your money.',
    },
    {
        id: 3,
        title: 'Streamlined Investment',
        subtitle:
            'Come up with our results-driven MVP to acquire early users and gain product traction, thus increasing your chances to catch the eye of potential investors. Show them your business idea they can evaluate and “touch”.',
    },
];
