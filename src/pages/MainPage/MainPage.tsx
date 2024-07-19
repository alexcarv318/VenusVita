import PageLayout from "src/components/layout/PageLayout/PageLayout.tsx";
import IntroScreen from "src/components/IntroScreen/IntroScreen.tsx";

const MainPage = () => {
    return (
        <>
            <PageLayout>
                <IntroScreen />
            </PageLayout>
        </>
    );
}

export default MainPage;