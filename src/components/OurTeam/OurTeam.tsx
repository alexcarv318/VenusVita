import styles from './OurTeam.module.scss';

const OurTeam = () => {
    return (
        <div className={styles.our_team}>
            <h2 className={styles.our_team_member__title}>Косметолог</h2>
            <p className={styles.our_team_member__description}>Детальний опис</p>
            <figure className={styles.our_team_member__figure}>
                <img className={styles.our_team_member__image} src="src/assets/png/team/nataliya.png" alt="Вергун Наталія"/>
                <figcaption className={styles.our_team_member__caption}>Вергун Наталія Михайлівна</figcaption>
            </figure>

            <h2 className={styles.our_team_member__title}>Косметолог</h2>
            <p className={styles.our_team_member__description}>Детальний опис</p>
            <figure className={styles.our_team_member__figure}>
                <img className={styles.our_team_member__image} src="src/assets/png/team/nastya.png" alt="Анастасія"/>
                <figcaption className={styles.our_team_member__caption}>Вергун Наталія Михайлівна</figcaption>
            </figure>
        </div>
    )
}

export default OurTeam;