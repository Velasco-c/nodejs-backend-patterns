export class TopicValidator {
    validate(data) {
        if (!data.course) {
            throw new Error("El curso del tema es obligatorio.");
        }
        if (!data.code) {
            throw new Error("El código del tema es obligatorio.");
        }
        if (!data.title) {
            throw new Error("El título del tema es obligatorio.");
        }
        if (!data.description) {
            throw new Error("La descripción del tema es obligatoria.");
        }
        return true;
    }
}