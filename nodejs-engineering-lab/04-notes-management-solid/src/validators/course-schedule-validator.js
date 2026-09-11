export class CourseScheduleValidator {
    validate(data) {
        if (!data.course) {
            throw new Error("El curso del horario es obligatorio.");
        }
        if (!data.teacher) {
            throw new Error("El profesor del horario es obligatorio.");
        }
        if (!data.classroom) {
            throw new Error("El aula del horario es obligatoria.");
        }
        if (!data.startDate) {
            throw new Error("La fecha de inicio es obligatoria.");
        }
        if (!data.endDate) {
            throw new Error("La fecha de finalización es obligatoria.");
        }
        return true;
    }
}