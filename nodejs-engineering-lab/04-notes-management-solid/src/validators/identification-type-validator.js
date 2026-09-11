export class IdentificationTypeValidator {
    validate(data) {
        if (!data.code) {
            throw new Error("El código del tipo de identificación es obligatorio.");
        }
        if (!data.name) {
            throw new Error("El nombre del tipo de identificación es obligatorio.");
        }
        if (!data.description) {
            throw new Error("La descripción del tipo de identificación es obligatoria.");
        }
        return true;
    }
}