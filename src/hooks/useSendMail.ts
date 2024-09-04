import { createClient } from "smtpexpress"

export const smtpexpressClient = createClient({
    projectId: "sm0pid-pxQiryvCb2RdF-jqxnHE5XaPV",
    projectSecret: "46cf1bd1812928a439745702f2649cde5b5c99059cc509abb0"
});

export function useSendMail(message: string) {
    localStorage.setItem("appointment", "true");
    smtpexpressClient.sendApi.sendMail({
        subject: "Запис на візит!",
        message: message,
        sender: {
            name: "Venus Vita",
            email: "venusvitasalon@gmail.com",
        },
        recipients: {
            email: "venusvitasalon@gmail.com",
        },
    }).then(r => {
        alert("Ваш запит на візит відправлено! Очікуйте на дзвінок адміністратора.");
    }).catch(e => {
        alert("Упс! Щось пішло не так. Спробуйте пізніше.");
        console.log(e);
    });
}