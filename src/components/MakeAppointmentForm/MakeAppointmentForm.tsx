import styles from './MakeAppointmentForm.module.scss';
import GoldButton from "src/components/GoldButton/GoldButton.tsx";
import {CSSProperties, useState} from "react";
import {sendMail} from "../../api/sendMail.ts";

type MakeAppointmentFormProps = {
    additional_styles?: CSSProperties;
}

const MakeAppointmentForm = ({ additional_styles }: MakeAppointmentFormProps) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMail({
            name: name,
            surname: surname,
            phone: phone,
            email: email
        });
    };

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    return (
        <div className={styles.make_appointment} style={additional_styles}>
            <h2 className={styles.make_appointment__title}>Записатися на візит</h2>
            <form className={styles.make_appointment_form} onSubmit={handleSubmit}>

                <input className={styles.make_appointment_form__name}
                       type="text" placeholder="Ім'я" name="name" value={name} onChange={handleChange(setName)}
                />
                <input className={styles.make_appointment_form__surname}
                       type="text" placeholder="Призвіще" name="surname" value={surname} onChange={handleChange(setSurname)}
                />
                <input className={styles.make_appointment_form__phone}
                       type="tel" placeholder="Номер телефону" name="phone" value={phone} onChange={handleChange(setPhone)}
                />
                <input className={styles.make_appointment_form__email}
                       type="email" placeholder="Email" name="email" value={email} onChange={handleChange(setEmail)}
                />

                <GoldButton text="Записатись" isFormSubmit={true} />
            </form>
        </div>
    )
}

export default MakeAppointmentForm;