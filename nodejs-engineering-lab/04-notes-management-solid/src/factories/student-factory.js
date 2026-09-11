import { Student } from "../models/student.js";
import { StudentValidator } from "../validators/student-validator.js";

export class StudentFactory {
    #validator;
    constructor(validator = new StudentValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new Student(
            data.id,
            data.code,
            data.firstName,
            data.lastName,
            data.identificationType,
            data.identificationNumber,
            data.gender,
            data.birthdate,
            data.email,
            data.address,
            data.city
        );
    }
}