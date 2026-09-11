export class ClassroomValidator {
    validate(data) {
        if (!data.code) {
            throw new Error("El código del aula es obligatorio.");
        }
        if (!data.description) {
            throw new Error("La descripción del aula es obligatoria.");
        }
        if (data.capacity === undefined || data.capacity === null) {
            throw new Error("La capacidad del aula es obligatoria.");
        }
        if (data.capacity <= 0) {
            throw new Error("La capacidad del aula debe ser mayor que cero.");
        }
        return true;
    }
}