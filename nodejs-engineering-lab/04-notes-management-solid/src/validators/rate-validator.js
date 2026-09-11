export class RateValidator {

    validate(data) {

        if (!data.inscription) {
            throw new Error("La inscripción es obligatoria.");
        }

        if (data.rate === undefined || data.rate === null) {
            throw new Error("La nota es obligatoria.");
        }

        if (data.rate < 0 || data.rate > 100) {
            throw new Error("La nota debe estar entre 0 y 100.");
        }
        if (!data.comments) {
            throw new Error("Los comentarios son obligatorios.");
        }
        return true;
    }
}