import { TeacherFactory } from "../factories/teacher-factory.js";
import { TeacherFormatter } from "../formatters/teacher-formatter.js";
import { store } from "../data/store.js";

export async function createTeacher(rl) {

    try {

        console.clear();

        console.log("================ CREAR PROFESOR ================");
        console.log("");

        if (store.identificationTypes.length === 0) {
            throw new Error(
                "Debe crear al menos un tipo de identificación antes de crear un profesor."
            );
        }

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

        const email = await rl.question("Correo electrónico: ");

        const factory = new TeacherFactory();

        const teacher = factory.create({
            id: store.teachers.length + 1,
            firstName,
            lastName,
            identificationType,
            identificationNumber,
            email
        });

        store.teachers.push(teacher);

        const formatter = new TeacherFormatter();

        console.log("");
        console.log("Profesor creado:");

        console.dir(
            formatter.format(teacher),
            { depth: 2 }
        );

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}