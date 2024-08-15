import styles from './OurTeam.module.scss';

const OurTeam = () => {
    // TODO: CHANGE THE DESCRIPTIONS BECAUSE THEY ARE STOLEN
    return (
        <div className={styles.our_team}>
            <div className={styles.our_team_member}>
                <div className={styles.our_team_member__info}>
                    <h2 className={styles.our_team_member__title}>Дерматокосметолог, засновник та головний лікар клініки Venus Vita</h2>
                    <p className={styles.our_team_member__description}>Більше 9 років практичного досвіду в естетичній косметології.</p>
                </div>
                <figure className={styles.our_team_member__figure}>
                    <img className={styles.our_team_member__image} src="src/assets/png/team/nataliya.png"
                         alt="Вергун Наталія"/>
                    <figcaption className={styles.our_team_member__caption}>Вергун Наталія Михайлівна</figcaption>
                </figure>
            </div>

            <div className={styles.our_team_member}>
                <div className={styles.our_team_member__info}>
                    <h2 className={styles.our_team_member__title}>Лікар-дерматолог, косметолог</h2>
                    <p className={styles.our_team_member__description}>Понад 7 років працює у сфері косметології, краси та молодості.</p>
                </div>
                <figure className={styles.our_team_member__figure}>
                    <img className={styles.our_team_member__image} src="src/assets/png/team/nastya.png"
                         alt="Анастасія"/>
                    <figcaption className={styles.our_team_member__caption}>Вергун Наталія Михайлівна</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default OurTeam;