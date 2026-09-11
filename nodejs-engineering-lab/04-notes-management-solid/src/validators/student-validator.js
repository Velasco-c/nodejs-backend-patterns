export class StudentValidator {
    validate(data) {
        if (!data.code) {
            throw new Error("El código del estudiante es obligatorio.");
        }
        if (!data.firstName) {
            throw new Error("El nombre del estudiante es obligatorio.");
        }
        if (!data.lastName) {
            throw new Error("El apellido del estudiante es obligatorio.");
        }
        if (!data.identificationType) {
            throw new Error("El tipo de identificación es obligatorio.");
        }
        if (!data.identificationNumber) {
            throw new Error("El número de identificación es obligatorio.");
        }
        if (!data.gender) {
            throw new Error("El género es obligatorio.");
        }
        if (!data.birthdate) {
            throw new Error("La fecha de nacimiento es obligatoria.");
        }
        if (!data.email) {
            throw new Error("El correo electrónico es obligatorio.");
        }
        if (!data.address) {
            throw new Error("La dirección es obligatoria.");
        }
        if (!data.city) {
            throw new Error("La ciudad es obligatoria.");
        }
        return true;
    }
}