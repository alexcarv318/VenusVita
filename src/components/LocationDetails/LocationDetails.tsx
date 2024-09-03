import styles from "./LocationDetails.module.scss";

const LocationDetails = () => {
    return (
        <div className={styles.location_details}>
            <div className={styles.location_details__address}>
                <h2>Адреса</h2>
                <p>вул. Степана Рудницького, 5А, Київ</p>
            </div>
            <div className={styles.location_details__schedule}>
                <h2>Графік роботи</h2>
                <p>Понеділок - Неділя<br/>з 09:00 до 21:00</p>
            </div>
            <div className={styles.location_details__email}>
                <h2>Електронна пошта</h2>
                <a href={"mailto:venusvitasalon@gmail.com"}><p>venusvitasalon@gmail.com</p></a>
            </div>
        </div>
    )
}

export default LocationDetails;