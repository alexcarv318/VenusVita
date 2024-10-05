import {Topic} from "src/types/Topic.ts";
import {useEffect, useState} from "react";
import ServiceTopicRow from "src/components/PriceTableComponents/ServiceTopicRow/ServiceTopicRow.tsx";
import ServiceRow from "src/components/PriceTableComponents/ServiceRow/ServiceRow.tsx";
import styles from "./ServiceTopicSection.module.scss"
import {Service} from "../../../types/Service.ts";
import {getServicesByTopic} from "../../../api/getServicesByTopic.ts";

type PriceRowProps = {
    topic: Topic;
}

const ServiceTopicSection = ({topic}: PriceRowProps) => {
    const [isContentOpen, setIsContentOpen] = useState(false);
    const [servicesRelatedToTopic, setServicesRelatedToTopic] = useState<Service[]>([])

    useEffect(() => {
        getServicesByTopic(topic.id).then(setServicesRelatedToTopic)
    }, [])

    return (
        <>
            <ServiceTopicRow
                onClick={() => setIsContentOpen(!isContentOpen)}
                isContentOpen={isContentOpen}
                topic={topic}
            />
            <div className={`${styles.services_content} ${isContentOpen ? styles.open : ''}`}>
                {servicesRelatedToTopic.map((service) => (
                    <ServiceRow key={service.id} service={service} />
                ))}
            </div>
        </>
    );
}

export default ServiceTopicSection;