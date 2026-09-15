import { CourseFactory } from "../factories/course-factory.js";
import { CourseFormatter } from "../formatters/course-formatter.js";
import { store } from "../data/store.js";

export async function createCourse(rl) {

    try {

        console.clear();

        console.log("================ CREAR CURSO ================");
        console.log("");

        const code = await rl.question("Código: ");
        const description = await rl.question("Descripción: ");
        const intensity = Number(
            await rl.question("Intensidad: ")
        );
        const weight = Number(
            await rl.question("Peso: ")
        );

        const activeInput = await rl.question(
            "¿Curso activo? (s/n): "
        );

        const active = activeInput.toLowerCase() === "s";

        const factory = new CourseFactory();

        const course = factory.create({
            id: store.courses.length + 1,
            code,
            description,
            intensity,
            weight,
            active
        });

        store.courses.push(course);
        store.notify({
            type: "course.created",
            data: course
        });

        const formatter = new CourseFormatter();

        console.log("");
        console.log("Curso creado:");
        console.log(formatter.format(course));

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}