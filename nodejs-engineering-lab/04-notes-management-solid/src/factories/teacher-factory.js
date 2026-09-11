import { Teacher } from "../models/teacher.js";
import { TeacherValidator } from "../validators/teacher-validator.js";

export class TeacherFactory {
    #validator;
    constructor(validator = new TeacherValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new Teacher(
            data.id,
            data.firstName,
            data.lastName,
            data.identificationType,
            data.identificationNumber,
            data.email
        );
    }
}