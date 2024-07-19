import styles from './MobileMenu.module.scss'
import Links from "src/components/Links/Links.tsx";

const MobileMenu = () => {
    return (
        <div className={styles.mobile_menu}>
            <Links direction={"column"} />
        </div>
    );
}

export default MobileMenu;