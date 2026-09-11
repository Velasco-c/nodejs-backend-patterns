export class RateFormatter {
    format(rate) {
        return {
            id: rate.id,
            inscription: rate.inscription,
            rate: rate.rate,
            comments: rate.comments
        };
    }
}