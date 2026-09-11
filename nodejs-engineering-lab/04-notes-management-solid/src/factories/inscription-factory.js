import { Inscription } from "../models/inscription.js";
import { InscriptionValidator } from "../validators/inscription-validator.js";

export class InscriptionFactory {
    #validator;
    constructor(validator = new InscriptionValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new Inscription(
            data.id,
            data.courseSchedule,
            data.student,
            data.registerDate,
            data.active
        );
    }
}