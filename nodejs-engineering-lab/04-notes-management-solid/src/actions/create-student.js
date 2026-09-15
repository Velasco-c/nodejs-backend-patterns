import { StudentFactory } from "../factories/student-factory.js";
import { StudentFormatter } from "../formatters/student-formatter.js";
import { store } from "../data/store.js";

export async function createStudent(rl) {

    try {

        console.clear();

        console.log("================ CREAR ESTUDIANTE ================");
        console.log("");

        if (store.identificationTypes.length === 0) {
            throw new Error(
                "Debe crear al menos un tipo de identificación antes de crear un estudiante."
            );
        }

        if (store.cities.length === 0) {
            throw new Error(
                "Debe crear al menos una ciudad antes de crear un estudiante."
            );
        }

        const code = await rl.question("Código: ");
        const firstName = await rl.question("Nombre: ");
        const lastName = await rl.question("Apellido: ");

        console.log("");
        console.log("TIPOS DE IDENTIFICACIÓN:");

        store.identificationTypes.forEach(identificationType => {
            console.log(
                `${identificationType.id}. ${identificationType.code} - ${identificationType.name}`
            );
        });

        const identificationTypeId =
            Number(await rl.question("Seleccione el tipo de identificación: "));

        const identificationType = store.identificationTypes.find(
            item => item.id === identificationTypeId
        );

        if (!identificationType) {
            throw new Error("El tipo de identificación seleccionado no existe.");
        }

        const identificationNumber =
            await rl.question("Número de identificación: ");

        const gender = await rl.question("Género: ");
        const birthdate = await rl.question("Fecha de nacimiento: ");
        const email = await rl.question("Correo electrónico: ");
        const address = await rl.question("Dirección: ");

        console.log("");
        console.log("CIUDADES:");

        store.cities.forEach(city => {
            console.log(`${city.id}. ${city.code} - ${city.name}`);
        });

        const cityId =
            Number(await rl.question("Seleccione la ciudad: "));

        const city = store.cities.find(
            item => item.id === cityId
        );

        if (!city) {
            throw new Error("La ciudad seleccionada no existe.");
        }

        const factory = new StudentFactory();

        const student = factory.create({
            id: store.students.length + 1,
            code,
            firstName,
            lastName,
            identificationType,
            identificationNumber,
            gender,
            birthdate,
            email,
            address,
            city
        });

        store.students.push(student);
        store.notify({
            type: "student.created",
            data: student
        });

        const formatter = new StudentFormatter();

        console.log("");
        console.log("Estudiante creado:");

        console.dir(
            formatter.format(student),
            { depth: 2 }
        );

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}