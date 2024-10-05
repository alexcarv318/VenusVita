import axios from "axios";
import {apiURL} from "../constants.ts";

type sendMailProps = {
    name: string;
    surname: string;
    phone: string;
    email: string;
}

export function sendMail({name, surname, phone, email}: sendMailProps) {
    axios.post(apiURL + "/api/appointment/create", {
        name: name,
        surname: surname,
        phone: phone,
        email: email,
    }).then(r => {
        alert("Ваш запит на візит відправлено! Очікуйте на дзвінок адміністратора.");
    }).catch(e => {
        alert("Упс! Щось пішло не так. Спробуйте пізніше.");
        console.log(e);
    });
}