export class CourseValidator {

    validate(data) {

        if (!data.code) {
            throw new Error("El código del curso es obligatorio.");
        }

        if (!data.description) {
            throw new Error("La descripción del curso es obligatoria.");
        }

        if (data.intensity === undefined || data.intensity === null) {
            throw new Error("La intensidad del curso es obligatoria.");
        }

        if (data.weight === undefined || data.weight === null) {
            throw new Error("El peso del curso es obligatorio.");
        }

        return true;
    }
}