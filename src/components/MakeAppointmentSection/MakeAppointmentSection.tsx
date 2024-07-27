import styles from "./MakeAppointmentSection.module.scss";
import MakeAppointmentForm from "src/components/MakeAppointmentForm/MakeAppointmentForm.tsx";

const MakeAppointmentSection = () => {
    return (
        <section className={styles.make_appointment_section}>
            <MakeAppointmentForm />
        </section>
    )
}

export default MakeAppointmentSection;