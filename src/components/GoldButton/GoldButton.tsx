import styles from './GoldButton.module.scss'

type GoldButtonProps = {
    text: string;
    isFormSubmit?: boolean;
}

const GoldButton = ({text, isFormSubmit}: GoldButtonProps) => {
    return (
        <button className={styles.gold_button} type={isFormSubmit ? "submit" : undefined}>
            {text.toUpperCase()}
        </button>
    );
}

export default GoldButton;