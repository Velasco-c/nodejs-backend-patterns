import { Course } from "../models/course.js";
import { CourseValidator } from "../validators/course-validator.js";

export class CourseFactory {
    #validator;
    constructor(validator = new CourseValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new Course(
            data.id,
            data.code,
            data.description,
            data.intensity,
            data.weight,
            data.active
        );
    }
}