import { City } from "../models/city.js";
import { CityValidator } from "../validators/city-validator.js";

export class CityFactory {
    #validator;
    constructor(validator = new CityValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new City(
            data.id,
            data.code,
            data.name
        );
    }
}