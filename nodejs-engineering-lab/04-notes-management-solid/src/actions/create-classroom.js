import { ClassroomFactory } from "../factories/classroom-factory.js";
import { ClassroomFormatter } from "../formatters/classroom-formatter.js";
import { store } from "../data/store.js";

export async function createClassroom(rl) {

    try {

        console.clear();

        console.log("================ CREAR AULA ================");
        console.log("");

        const code = await rl.question("Código: ");
        const description = await rl.question("Descripción: ");
        const capacity = Number(
            await rl.question("Capacidad: ")
        );

        const activeInput = await rl.question(
            "¿Aula activa? (s/n): "
        );

        const active = activeInput.toLowerCase() === "s";

        const factory = new ClassroomFactory();

        const classroom = factory.create({
            id: store.classrooms.length + 1,
            code,
            description,
            capacity,
            active
        });

        store.classrooms.push(classroom);
        store.notify({
            type: "classroom.created",
            data: classroom
        });

        const formatter = new ClassroomFormatter();

        console.log("");
        console.log("Aula creada:");
        console.log(formatter.format(classroom));

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}