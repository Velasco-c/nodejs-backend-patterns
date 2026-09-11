export class InscriptionFormatter {
    format(inscription) {
        return {
            id: inscription.id,
            courseSchedule: inscription.courseSchedule,
            student: inscription.student,
            registerDate: inscription.registerDate,
            active: inscription.active
        };
    }
}