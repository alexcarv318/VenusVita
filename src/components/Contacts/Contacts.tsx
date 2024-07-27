import styles from "./Contacts.module.scss";
import logo from "src/assets/svg/logo/logo.svg";
import instagram from "src/assets/svg/instagram-50.svg";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <img className={styles.contacts__logo} src={logo} alt={"VenusVita"}/>
            <a className={styles.contacts__tel_link} href={"tel:+380999999999"}>
                <p className={styles.contacts__tel}>+380 99 999 99 99</p>
            </a>
            <a className={styles.contacts__instagram_link} href={""}>
                <img className={styles.contacts__instagram} src={instagram} alt={"instagram"}/>
            </a>
        </div>
    );
}

export default Contacts;