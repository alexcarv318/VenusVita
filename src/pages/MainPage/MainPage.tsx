import styles from './MainPage.module.scss'
import PageLayout from "src/components/layout/PageLayout/PageLayout.tsx";
import IntroScreen from "src/components/IntroScreen/IntroScreen.tsx";
import MakeAppointmentSection from "src/components/MakeAppointmentSection/MakeAppointmentSection.tsx";
import ServicesSlider from "src/components/ServicesSlider/ServicesSlider.tsx";
import GoldLine from "src/components/GoldLine/GoldLine.tsx";

const MainPage = () => {
    return (
        <PageLayout>
            <IntroScreen />
            <ServicesSlider />
            <MakeAppointmentSection />
        </PageLayout>
    );
}

export default MainPage;