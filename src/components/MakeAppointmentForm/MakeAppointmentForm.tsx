import styles from './MakeAppointmentForm.module.scss';
import GoldButton from "src/components/GoldButton/GoldButton.tsx";

const MakeAppointmentForm = () => {
    return (
        <div className={styles.make_appointment}>
            <h2 className={styles.make_appointment__title}>Записатися на візит</h2>
            <form className={styles.make_appointment_form}>

                <input className={styles.make_appointment_form__name}
                    type={"text"} placeholder={"Ім'я"} name={"name"}
                />
                <input className={styles.make_appointment_form__surname}
                   type={"text"} placeholder={"Призвіще"} name={"surname"}
                />
                <input className={styles.make_appointment_form__phone}
                    type={"tel"} placeholder={"Номер телефону"} pattern={"/^(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?$/"}
                />
                <input className={styles.make_appointment_form__email}
                    type={"email"} placeholder={"Email"}
                />

                <GoldButton text={"Записатись"} isFormSubmit={true} />
            </form>
        </div>
    )
}

export default MakeAppointmentForm;