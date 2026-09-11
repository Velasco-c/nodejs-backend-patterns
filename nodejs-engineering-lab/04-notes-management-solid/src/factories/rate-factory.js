import { Rate } from "../models/rate.js";
import { RateValidator } from "../validators/rate-validator.js";

export class RateFactory {
    #validator;
    constructor(validator = new RateValidator()){
        this.#validator = validator;
    }
    create(data){
        this.#validator.validate(data)
        return new Rate(
            data.id,
            data.inscription,
            data.rate,
            data.comments
        );
    }
}