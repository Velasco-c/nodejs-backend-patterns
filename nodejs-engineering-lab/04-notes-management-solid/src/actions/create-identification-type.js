import { IdentificationTypeFactory } from "../factories/identification-type-factory.js";
import { IdentificationTypeFormatter } from "../formatters/identification-type-formatter.js";
import { store } from "../data/store.js";

export async function createIdentificationType(rl) {

    try {

        console.clear();

        console.log("============= CREAR TIPO DE IDENTIFICACIÓN =============");
        console.log("");

        const code = await rl.question("Código: ");
        const name = await rl.question("Nombre: ");
        const description = await rl.question("Descripción: ");

        const factory = new IdentificationTypeFactory();

        const identificationType = factory.create({
            id: store.identificationTypes.length + 1,
            code,
            name,
            description
        });

        store.identificationTypes.push(identificationType);

        const formatter = new IdentificationTypeFormatter();

        console.log("");
        console.log("Tipo de identificación creado:");
        console.log(formatter.format(identificationType));

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}