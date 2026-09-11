export class IdentificationTypeFormatter {

    format(identificationType) {

        return {
            id: identificationType.id,
            code: identificationType.code,
            name: identificationType.name,
            description: identificationType.description
        };
    }
}
