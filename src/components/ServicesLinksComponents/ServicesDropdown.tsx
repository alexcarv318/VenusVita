import styles from './ServicesLinks.module.scss';
import {useEffect, useState} from "react";
import {Topic} from "../../types/Topic.ts";
import {getServiceTopicsWithImages} from "../../api/getServiceTopicsWithImages.ts";

const ServicesDropdown = () => {
    const [serviceTopicsWithImages, setServiceTopicsWithImages] = useState<Topic[]>([]);

    useEffect(() => {
        getServiceTopicsWithImages().then(setServiceTopicsWithImages);
    }, []);

    return (
        <div className={styles.services_link__dropdown}>
            {serviceTopicsWithImages.map((topic) => (
                <h4>{topic.topic}</h4>
            ))}
        </div>
    );
}

export default ServicesDropdown;