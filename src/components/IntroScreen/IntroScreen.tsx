import styles from './IntroScreen.module.scss'
import GoldButton from "src/components/GoldButton/GoldButton.tsx";

const IntroScreen = () => {
    return (
        <section className={styles.intro_screen}>
            <div className={styles.intro_screen__heading}>
                <h1>Venus Vita</h1>
                <p>
                    Наш косметологічний салон пропонує якісні послуги по догляду за шкірою, використовуючи сучасне обладнання та професійні засоби. У нас працюють досвідчені спеціалісти, які забезпечують індивідуальний підхід до кожного клієнта. Насолоджуйтеся комфортом та ефективними процедурами у затишній атмосфері.
                </p>
                <GoldButton text={"Записатись"} />
            </div>
        </section>
    );
}

export default IntroScreen;