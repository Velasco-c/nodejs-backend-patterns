import { CityFactory } from "../factories/city-factory.js";
import { CityFormatter } from "../formatters/city-formatter.js";
import { store } from "../data/store.js";

export async function createCity(rl) {

    try {

        console.clear();

        console.log("================ CREAR CIUDAD ================");
        console.log("");

        const code = await rl.question("Código: ");
        const name = await rl.question("Nombre: ");

        const factory = new CityFactory();

        const city = factory.create({
            id: store.cities.length + 1,
            code,
            name
        });

        store.cities.push(city);
        store.notify({
            type: "city.created",
            data: city
        });

        const formatter = new CityFormatter();

        console.log("");
        console.log("Ciudad creada:");
        console.log(formatter.format(city));

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}