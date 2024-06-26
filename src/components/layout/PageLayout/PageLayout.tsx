import {PropsWithChildren} from "react";
import Header from "@src/components/layout/Header/Header.tsx";

type PageLayoutProps = PropsWithChildren;

const PageLayout = ({children}: PageLayoutProps) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    );
}

export default PageLayout;