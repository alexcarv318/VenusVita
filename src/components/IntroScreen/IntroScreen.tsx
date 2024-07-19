import styles from './IntroScreen.module.scss'
import GoldButton from "src/components/GoldButton/GoldButton.tsx";

const IntroScreen = () => {
    return (
        <section className={styles.intro_screen}>
            <div className={styles.intro_screen__heading}>
                <h1>Venus Vita</h1>
                <p>
                    Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст."
                </p>
                <GoldButton text={"Записатись"} />
            </div>
        </section>
    );
}

export default IntroScreen;