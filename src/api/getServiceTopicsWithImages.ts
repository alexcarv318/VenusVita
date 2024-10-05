import axios from "axios";
import {apiURL} from "../constants.ts";
import {Topic} from "../types/Topic.ts";

export async function getServiceTopicsWithImages(): Promise<Topic[] | undefined> {
    try {
        const response = await axios.get(apiURL + "/services/topics-with-images");

        if (response.status === 200) {
            return response.data.map((topic: any) => ({
                id: topic._id.$oid,
                topic: topic.topic,
                imageUrl: topic.image_url,
            }));
        } else {
            console.log(`Error: received status ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching topics with images", error);
    }
}