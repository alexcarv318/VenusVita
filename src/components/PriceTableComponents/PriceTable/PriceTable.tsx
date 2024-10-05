import services_topics from "src/data/services_topics.json";
import styles from "src/components/PriceTableComponents/PriceTable/PriceTable.module.scss"
import TableContainer from "src/components/layout/TableContainer/TableContainer.tsx";
import ServiceTopicSection from "src/components/PriceTableComponents/ServiceTopicSection/ServiceTopicSection.tsx";
import {useEffect, useState} from "react";
import {Topic} from "../../../types/Topic.ts";
import {getServiceTopics} from "../../../api/getServiceTopics.ts";

const PriceTable = () => {
    const [serviceTopics, setServiceTopics] = useState<Topic[]>([]);

    useEffect(() => {
        getServiceTopics().then(setServiceTopics);
    }, []);

    return (
        <TableContainer>
            <div className={styles.table_inner_container}>
                <h2 className={styles.title}>Ціни на послуги</h2>
                <div style={{marginBottom: "20px"}}>
                    {serviceTopics.map((topic) => (
                        <ServiceTopicSection key={topic.id} topic={topic} />
                    ))}
                </div>
            </div>
        </TableContainer>
    )
}

export default PriceTable;