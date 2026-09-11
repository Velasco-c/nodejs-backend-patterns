export class TeacherValidator {
    validate(data) {
        if (!data.firstName) {
            throw new Error("El nombre del profesor es obligatorio.");
        }
        if (!data.lastName) {
            throw new Error("El apellido del profesor es obligatorio.");
        }
        if (!data.identificationType) {
            throw new Error("El tipo de identificación es obligatorio.");
        }
        if (!data.identificationNumber) {
            throw new Error("El número de identificación es obligatorio.");
        }
        if (!data.email) {
            throw new Error("El correo electrónico es obligatorio.");
        }
        return true;
    }
}