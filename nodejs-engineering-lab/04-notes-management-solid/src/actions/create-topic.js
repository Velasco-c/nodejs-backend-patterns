import { TopicFactory } from "../factories/topic-factory.js";
import { TopicFormatter } from "../formatters/topic-formatter.js";
import { store } from "../data/store.js";

export async function createTopic(rl) {

    try {

        console.clear();

        console.log("================ CREAR TEMA ================");
        console.log("");

        if (store.courses.length === 0) {
            throw new Error(
                "Debe crear al menos un curso antes de crear un tema."
            );
        }

        console.log("CURSOS:");

        store.courses.forEach(course => {
            console.log(
                `${course.id}. ${course.code} - ${course.description}`
            );
        });

        const courseId =
            Number(await rl.question("Seleccione el curso: "));

        const course = store.courses.find(
            item => item.id === courseId
        );

        if (!course) {
            throw new Error("El curso seleccionado no existe.");
        }

        const code = await rl.question("Código del tema: ");
        const title = await rl.question("Título: ");
        const description = await rl.question("Descripción: ");

        const activeInput = await rl.question(
            "¿Tema activo? (s/n): "
        );

        const active = activeInput.toLowerCase() === "s";

        const factory = new TopicFactory();

        const topic = factory.create({
            id: store.topics.length + 1,
            course,
            code,
            title,
            description,
            active
        });

        store.topics.push(topic);

        const formatter = new TopicFormatter();

        console.log("");
        console.log("Tema creado:");

        console.dir(
            formatter.format(topic),
            { depth: 2 }
        );

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}