import styles from './ServiceTopicRow.module.scss';
import {Topic} from "src/types/Topic.ts";
import caretUp from "/assets/svg/CaretUp.svg";
import caretDown from "/assets/svg/CaretDown.svg";

type ServiceTopicRowProps = {
    topic: Topic;
    isContentOpen: boolean;
    onClick: () => void;
}

const ServiceTopicRow = ({topic, isContentOpen, onClick}: ServiceTopicRowProps) => {
    return (
        <div onClick={onClick} className={styles.service_topic_row}>
            <h2>{topic.topic}</h2>
            {isContentOpen ? <img src={caretUp} alt="caret-up"/> : <img src={caretDown} alt="caret-down"/>}
        </div>
    );
}

export default ServiceTopicRow;