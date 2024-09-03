import services_topics from 'src/data/services_topics.json';
import styles from './ServicesLinks.module.scss';

const ServicesDropdown = () => {
    const serviceTopicsWithImages = services_topics.filter((topic) => topic.image_url !== undefined);

    return (
        <div className={styles.services_link__dropdown}>
            {serviceTopicsWithImages.map((topic) => (
                <h4>{topic.topic}</h4>
            ))}
        </div>
    );
}

export default ServicesDropdown;