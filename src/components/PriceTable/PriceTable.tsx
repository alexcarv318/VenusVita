import services from "src/data/services.json";
import services_topics from "src/data/services_topics.json";
import TableContainer from "src/components/layout/TableContainer/TableContainer.tsx";

const PriceTable = () => {
    console.log(services);

    return (
        <TableContainer>
            <table>
                <thead>
                    <tr>
                        <th>Послуга</th>
                        <th>Ціна</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) => (
                        <tr key={index}>
                            <td>{service.name}</td>
                            <td>{service.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContainer>
    )
}

export default PriceTable;