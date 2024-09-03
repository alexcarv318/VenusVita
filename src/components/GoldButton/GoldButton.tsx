import styles from './GoldButton.module.scss'

type GoldButtonProps = {
    text: string;
    isFormSubmit?: boolean;
}

const GoldButton = ({text, isFormSubmit}: GoldButtonProps) => {
    return (
        <button className={styles.gold_button} type={isFormSubmit ? "submit" : undefined}>
            {isFormSubmit && text.toUpperCase()}
            {!isFormSubmit && <a href={"tel:+380684876309"}>{text.toUpperCase()}</a>}
        </button>
    );
}

export default GoldButton;