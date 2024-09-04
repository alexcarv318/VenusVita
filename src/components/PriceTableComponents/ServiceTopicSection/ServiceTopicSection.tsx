import {ServiceTopic} from "src/types/ServiceTopic.ts";
import {useState} from "react";
import services from "src/data/services.json";
import ServiceTopicRow from "src/components/PriceTableComponents/ServiceTopicRow/ServiceTopicRow.tsx";
import ServiceRow from "src/components/PriceTableComponents/ServiceRow/ServiceRow.tsx";
import styles from "./ServiceTopicSection.module.scss"

type PriceRowProps = {
    topic: ServiceTopic;
}

const ServiceTopicSection = ({topic}: PriceRowProps) => {
    const [isContentOpen, setIsContentOpen] = useState(false);
    const servicesFilteredByTopic = services.filter((service) => service.topic_id === topic.id);

    return (
        <>
            <ServiceTopicRow
                onClick={() => setIsContentOpen(!isContentOpen)}
                isContentOpen={isContentOpen}
                topic={topic}
            />
            <div className={`${styles.services_content} ${isContentOpen ? styles.open : ''}`}>
                {servicesFilteredByTopic.map((service) => (
                    <ServiceRow key={service.id} service={service} />
                ))}
            </div>
        </>
    );
}

export default ServiceTopicSection;