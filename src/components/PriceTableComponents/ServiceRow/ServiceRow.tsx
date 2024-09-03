import styles from './ServiceRow.module.scss';
import {Service} from "src/types/Service.ts";

type ServiceRowProps = {
    service: Service;
}

const ServiceRow = ({service}: ServiceRowProps) => {
    return (
        <div className={styles.service_row}>
            <h4>{service.name}</h4>
            <p>{service.price} грн</p>
        </div>
    );
}

export default ServiceRow;