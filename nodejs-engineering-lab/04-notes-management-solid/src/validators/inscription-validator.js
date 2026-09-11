export class InscriptionValidator {
    validate(data) {
        if (!data.courseSchedule) {
            throw new Error("El horario del curso es obligatorio.");
        }
        if (!data.student) {
            throw new Error("El estudiante es obligatorio.");
        }
        if (!data.registerDate) {
            throw new Error("La fecha de inscripción es obligatoria.");
        }
        return true;
    }
}