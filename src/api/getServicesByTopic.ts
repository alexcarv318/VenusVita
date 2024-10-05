import axios from "axios";
import {apiURL} from "../constants.ts";
import {Service} from "../types/Service.ts";

export async function getServicesByTopic(topicId: string): Promise<Service[] | undefined> {
    try {
        const response = await axios.get(apiURL + `/services/services/${topicId}`);

        if (response.status === 200) {
            return response.data.map((service: any) => ({
                id: service._id.$oid,
                name: service.name,
                description: service.description,
                price: service.price,
                imageUrl: service.image_url,
                topicId: service.topic_id,
            }));
        } else {
            console.log(`Error: received status ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching topics with images", error);
    }
}