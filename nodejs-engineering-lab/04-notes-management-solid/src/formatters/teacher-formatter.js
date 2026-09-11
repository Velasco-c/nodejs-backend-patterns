export class TeacherFormatter {
    format(teacher) {
        return {
            id: teacher.id,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            identificationType: teacher.identificationType,
            identificationNumber: teacher.identificationNumber,
            email: teacher.email
        };
    }
}