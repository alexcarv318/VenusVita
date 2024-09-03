import styles from './AddressAndContactsScreen.module.scss';
import LocationDetails from "src/components/LocationDetails/LocationDetails.tsx";
import MakeAppointmentForm from "src/components/MakeAppointmentForm/MakeAppointmentForm.tsx";
import {useMediaQueries} from "src/hooks/useMediaQueries.ts";
import MakeAppointmentSection from "src/components/MakeAppointmentSection/MakeAppointmentSection.tsx";

const AddressAndContactsScreen = () => {
    const mediaQueries = useMediaQueries()

    return (
        <div className={styles.address_and_contacts}>
            <h1>Контактна інформація</h1>
            <div className={styles.address_and_contacts_container}>
                {mediaQueries.isTabletOrMobile &&
                    <MakeAppointmentSection />}
                {mediaQueries.isDesktopOrLaptop &&
                    <MakeAppointmentForm additional_styles={{margin: 0, width: "100%"}} />}
                <LocationDetails/>
            </div>
        </div>
    )
}

export default AddressAndContactsScreen;