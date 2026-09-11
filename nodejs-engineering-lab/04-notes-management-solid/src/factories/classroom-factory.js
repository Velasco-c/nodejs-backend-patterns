import { Classroom } from "../models/classroom.js";
import { ClassroomValidator } from "../validators/classroom-validator.js";

export class ClassroomFactory {
    #validator;
    constructor(validator = new ClassroomValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new Classroom(
            data.id,
            data.code,
            data.description,
            data.capacity,
            data.active
        );
    }
}