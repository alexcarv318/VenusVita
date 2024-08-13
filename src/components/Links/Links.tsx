import styles from "./Links.module.scss";
import {Link} from "react-router-dom";

type LinksProps = () => {
    direction: "column" | "row";
    align?: "center" | "start" | "end";
}

const Links = ({direction, align}: LinksProps) => {
    return (
        <div className={(direction === "row" ? styles.links_row : styles.links_column)} style={{textAlign: align}}>
            <Link to={"/"} className={styles.link}>Послуги</Link>
            <Link to={"/about"} className={styles.link}>Про нас</Link>
            <Link to={"/"} className={styles.link}>Ціни</Link>
            <Link to={"/contacts"} className={styles.link}>Контакти</Link>
        </div>
    )
}

export default Links;