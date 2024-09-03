import styles from "./Contacts.module.scss";
import logo from "public/assets/svg/logo/logo.svg";
import instagram from "public/assets/svg/instagram-50.svg";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <img className={styles.contacts__logo} src={logo} alt={"VenusVita"}/>
            <a className={styles.contacts__tel_link} href={"tel:+380684876309"}>
                <p className={styles.contacts__tel}>+380 68 487 63 09</p>
            </a>
            <a className={styles.contacts__instagram_link} href={"https://www.instagram.com/venus.vita/"} target={"_blank"}>
                <img className={styles.contacts__instagram} src={instagram} alt={"instagram"}/>
            </a>
        </div>
    );
}

export default Contacts;