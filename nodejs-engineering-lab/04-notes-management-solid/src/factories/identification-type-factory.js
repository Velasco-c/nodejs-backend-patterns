import { IdentificationType } from "../models/identification-type.js";
import { IdentificationTypeValidator } from "../validators/identification-type-validator.js";

export class IdentificationTypeFactory {
    #validator;
    constructor(validator = new IdentificationTypeValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new IdentificationType(
            data.id,
            data.code,
            data.name,
            data.description
        );
    }
}