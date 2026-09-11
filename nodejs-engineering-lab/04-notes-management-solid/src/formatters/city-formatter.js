export class CityFormatter {
    format(city){
        return {
            id: city.id,
            code: city.code,
            name: city.name
        };
    }
}