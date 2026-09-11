import { Topic } from "../models/topic.js";
import { TopicValidator } from "../validators/topic-validator.js";

export class TopicFactory {
    #validator;
    constructor(validator = new TopicValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new Topic(
            data.id,
            data.course,
            data.code,
            data.title,
            data.description,
            data.active
        );
    }
}