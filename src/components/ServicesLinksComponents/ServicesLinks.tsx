import link_styles from "src/components/Links/Links.module.scss";
import styles from "./ServicesLinks.module.scss";
import caretDown from "src/assets/svg/LinkCaretDown.svg";
import ServicesDropdown from "src/components/ServicesLinksComponents/ServicesDropdown.tsx";

const ServicesLinks = () => {
    return (
        <a className={link_styles.link + " " + styles.services_link}>
            Послуги
            <img src={caretDown} alt={"caret down"} className={link_styles.caret_down}/>
            <ServicesDropdown />
        </a>
    );
}

export default ServicesLinks;