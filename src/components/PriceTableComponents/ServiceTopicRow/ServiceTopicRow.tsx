import styles from './ServiceTopicRow.module.scss';
import {ServiceTopic} from "src/types/ServiceTopic.ts";
import caretUp from "public/assets/svg/CaretUp.svg";
import caretDown from "public/assets/svg/CaretDown.svg";

type ServiceTopicRowProps = {
    topic: ServiceTopic;
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