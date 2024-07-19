import {PropsWithChildren, useState} from "react";
import Header from "src/components/layout/Header/Header.tsx";
import MobileMenu from "src/components/layout/MobileMenu/MobileMenu.tsx";

type PageLayoutProps = PropsWithChildren;

const PageLayout = ({children}: PageLayoutProps) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Header isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            {isMobileMenuOpen && <MobileMenu />}

            <div className={"layout_container"}>
                {children}
            </div>
        </>
    );
}

export default PageLayout;