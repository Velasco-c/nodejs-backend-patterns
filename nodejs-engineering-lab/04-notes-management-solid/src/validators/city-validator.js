export class CityValidator {
    validate(data) {
        if (!data.code) {
            throw new Error("El código de la ciudad es obligatorio.");
        }
        if (!data.name) {
            throw new Error("El nombre de la ciudad es obligatorio.");
        }
        return true;
    }
}