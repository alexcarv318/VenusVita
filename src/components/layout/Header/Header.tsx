import logo from 'src/assets/svg/logo/logo.svg';
import bars from 'src/assets/svg/bars-xs.svg';
import styles from 'src/components/layout/Header/Header.module.scss';
import {useScrollDirection} from "src/hooks/useScrollDirection.ts";
import {useMediaQueries} from "src/hooks/useMediaQueries.ts";
import GoldButton from "src/components/GoldButton/GoldButton.tsx";
import Links from "src/components/Links/Links.tsx";
import {Link} from "react-router-dom";

type HeaderProps = {
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

const Header = ({isMobileMenuOpen, setMobileMenuOpen}: HeaderProps) => {
    const scrollDirection = useScrollDirection()
    const mediaQueries = useMediaQueries()

    return (
        <header className={`${styles.header} ${(scrollDirection === 'down' && !isMobileMenuOpen) ? styles.header_hidden : styles.header_shown}`}>
            <Link to={"/home"}><img className={styles.header__logo} src={logo} alt={"Venus Vita logo"} /></Link>

            {mediaQueries.isDesktopOrLaptop && (
                <>
                    <Links direction={"row"} />
                    <GoldButton text={"Записатись"} />
                </>
            )}

            {mediaQueries.isTabletOrMobile && (
                <img className={styles.header__menu} src={bars} alt={"Mobile menu"} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
            )}

        </header>
    );
}

export default Header;