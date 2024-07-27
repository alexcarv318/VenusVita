import styles from './MainPage.module.scss'
import PageLayout from "src/components/layout/PageLayout/PageLayout.tsx";
import IntroScreen from "src/components/IntroScreen/IntroScreen.tsx";
import MakeAppointmentSection from "src/components/MakeAppointmentSection/MakeAppointmentSection.tsx";

const MainPage = () => {
    return (
        <>
            <PageLayout>
                <IntroScreen />
                <MakeAppointmentSection />
            </PageLayout>
        </>
    );
}

export default MainPage;