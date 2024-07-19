import styles from './GoldButton.module.scss'

type GoldButtonProps = {
    text: string;
}

const GoldButton = ({text}: GoldButtonProps) => {
    return (
        <button className={styles.gold_button}>
            {text.toUpperCase()}
        </button>
    );
}

export default GoldButton;