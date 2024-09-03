import {PropsWithChildren, useState} from "react";
import styles from './PageLayout.module.scss'
import Header from "src/components/layout/Header/Header.tsx";
import MobileMenu from "src/components/layout/MobileMenu/MobileMenu.tsx";
import Footer from "src/components/layout/Footer/Footer.tsx";

type PageLayoutProps = PropsWithChildren;

const PageLayout = ({children}: PageLayoutProps) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className={styles.page_layout}>
            <img className={styles.page_layout__background} src={"/assets/images/main_background/main_background.png"} alt={"background"} />

            <Header isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            {isMobileMenuOpen && <MobileMenu />}

            <div className={"layout_container"}>
                {children}
            </div>

            <Footer />
        </div>
    );
}

export default PageLayout;