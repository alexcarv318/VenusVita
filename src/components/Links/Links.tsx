import styles from "./Links.module.scss";
import {Link} from "react-router-dom";

type LinksProps = () => {
    direction: "column" | "row";
}

const Links = ({direction}: LinksProps) => {
    return (
        <div className={(direction === "row" ? styles.links_row : styles.links_column)}>
            <Link to={"/"} className={styles.link}>Послуги</Link>
            <Link to={"/"} className={styles.link}>Про нас</Link>
            <Link to={"/"} className={styles.link}>Ціни</Link>
            <Link to={"/"} className={styles.link}>Контакти</Link>
        </div>
    )
}

export default Links;