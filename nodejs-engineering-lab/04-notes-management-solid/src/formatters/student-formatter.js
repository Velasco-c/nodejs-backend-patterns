export class StudentFormatter {
    format(student) {
        return {
            id: student.id,
            code: student.code,
            firstName: student.firstName,
            lastName: student.lastName,
            identificationType: student.identificationType,
            identificationNumber: student.identificationNumber,
            gender: student.gender,
            birthdate: student.birthdate,
            email: student.email,
            address: student.address,
            city: student.city
        };
    }
}