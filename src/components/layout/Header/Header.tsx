import logo from '@src/assets/svg/logo/logo.svg';
import bars from '@src/assets/svg/bars-xs.svg';
import styles from '@src/components/layout/Header/Header.module.scss';
import {useScrollDirection} from '@src/hooks/useScrollDirection.tsx';
import {useMediaQueries} from "@src/hooks/useMediaQueries.ts";
import {Link} from "react-router-dom";

const Header = () => {
    const scrollDirection = useScrollDirection()
    const mediaQueries = useMediaQueries()

    return (
        <header className={`${styles.header} ${(scrollDirection === 'down' ? styles.header_hidden : styles.header_shown)}`}>
            <img className={styles.header__logo} src={logo} alt={"Venus Vita logo"} />

            {mediaQueries.isDesktopOrLaptop && (
                <>
                    <div className={styles.header__links}>
                        <Link to={"/"} className={styles.header__link}>Послуги</Link>
                        <Link to={"/"} className={styles.header__link}>Про нас</Link>
                        <Link to={"/"} className={styles.header__link}>Ціни</Link>
                        <Link to={"/"} className={styles.header__link}>Контакти</Link>
                    </div>

                    <button>
                        Замовити
                    </button>
                </>
            )}

            {mediaQueries.isTabletOrMobile && (
                <img src={bars} alt={"Menu"} />
            )}

        </header>
    );
}

export default Header;