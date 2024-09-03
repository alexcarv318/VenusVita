import styles from './Footer.module.scss'
import Links from "src/components/Links/Links.tsx";
import {useMediaQueries} from "src/hooks/useMediaQueries.ts";
import Contacts from "src/components/Contacts/Contacts.tsx";

const Footer = () => {
    const mediaQueries = useMediaQueries();

    return (
        <footer>
            {mediaQueries.isDesktopOrLaptop && (
                <Links direction={"row"} />
            )}

            {mediaQueries.isTabletOrMobile && (
                <Links direction={"column"} align={"start"} />
            )}

            <Contacts />

            <p className={styles.footer_copyrights}>
                © 2024 VenusVita. Всі права захищено.
            </p>
        </footer>
    )
}

export default Footer;