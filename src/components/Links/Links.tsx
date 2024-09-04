import styles from "./Links.module.scss";
import {Link} from "react-router-dom";
import ServicesLinks from "src/components/ServicesLinksComponents/ServicesLinks.tsx";

type LinksProps = {
    direction: "column" | "row";
    align?: "center" | "start" | "end";
}

const Links = ({direction, align}: LinksProps) => {
    return (
        <div className={(direction === "row" ? styles.links_row : styles.links_column)} style={{textAlign: align}}>
            {/*<ServicesLinks />*/}
            <Link to={"/"} className={styles.link}>Головна</Link>
            <Link to={"/about"} className={styles.link}>Про нас</Link>
            <Link to={"/price"} className={styles.link}>Ціни</Link>
            <Link to={"/contacts"} className={styles.link}>Контакти</Link>
        </div>
    )
}

export default Links;