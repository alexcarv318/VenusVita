import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceSlider.module.scss";
import {useMediaQueries} from "src/hooks/useMediaQueries.ts";
import {getServiceTopicsWithImages} from "../../api/getServiceTopicsWithImages.ts";
import {useEffect, useState} from "react";
import {Topic} from "../../types/Topic.ts";

const ServicesSlider = () => {
    const [serviceTopicsWithImages, setServiceTopicsWithImages] = useState<Topic[]>([]);
    const mediaQueries = useMediaQueries();

    useEffect(() => {
        getServiceTopicsWithImages().then(setServiceTopicsWithImages);
    }, []);

    const settings = {
        arrows: true,
        draggable: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: mediaQueries.isTabletOrMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <section className={styles.slider_section}>
            <div className={styles.slider_container}>
                <Slider {...settings}>
                    {serviceTopicsWithImages.map((topic) => (
                        <div className={styles.service_card} key={topic.id}>
                            <img className={styles.service_card__image}
                                 src={topic.imageUrl} alt={topic.topic}/>
                            <h3 className={styles.service_card__title}>{topic.topic}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default ServicesSlider;