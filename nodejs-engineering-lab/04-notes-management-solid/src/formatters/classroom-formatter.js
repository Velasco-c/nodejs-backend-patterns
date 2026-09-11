export class ClassroomFormatter {
    format(classroom) {
        return {
            id: classroom.id,
            code: classroom.code,
            description: classroom.description,
            capacity: classroom.capacity,
            active: classroom.active
        };
    }
}