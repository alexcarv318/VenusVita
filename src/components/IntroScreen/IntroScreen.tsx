import styles from './IntroScreen.module.scss'
import GoldButton from "src/components/GoldButton/GoldButton.tsx";

const IntroScreen = () => {
    return (
        <section className={styles.intro_screen}>
            <div className={styles.intro_screen__heading}>
                <h1>Venus Vita</h1>
                <p>
                    Наш косметологічний салон пропонує широкий спектр послуг для догляду за шкірою, включаючи професійні процедури та консультації. Ми використовуємо сучасне обладнання та високоякісні косметичні засоби, щоб забезпечити найкращі результати для кожного клієнта. Наші фахівці мають багаторічний досвід і проходять регулярне навчання, щоб залишатися в курсі новітніх тенденцій і технологій. У затишній атмосфері салону ви зможете розслабитися і насолодитися доглядом за собою.
                </p>
                <GoldButton text={"Записатись"} />
            </div>
        </section>
    );
}

export default IntroScreen;