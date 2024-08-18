import services from "src/data/services.json";
import services_topics from "src/data/services_topics.json";
import styles from "src/components/PriceTableComponents/PriceTable/PriceTable.module.scss"
import TableContainer from "src/components/layout/TableContainer/TableContainer.tsx";
import ServiceTopicSection from "src/components/PriceTableComponents/ServiceTopicSection/ServiceTopicSection.tsx";

const PriceTable = () => {
    return (
        <TableContainer>
            <div className={styles.table_inner_container}>
                <h2 className={styles.title}>Ціни на послуги</h2>
                <div style={{marginBottom: "20px"}}>
                    {services_topics.map((topic) => (
                        <ServiceTopicSection key={topic.id} topic={topic} services={services}/>
                    ))}
                </div>
            </div>
        </TableContainer>
    )
}

export default PriceTable;