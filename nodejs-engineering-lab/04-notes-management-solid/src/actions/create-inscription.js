import { InscriptionFactory } from "../factories/inscription-factory.js";
import { InscriptionFormatter } from "../formatters/inscription-formatter.js";
import { store } from "../data/store.js";

export async function createInscription(rl) {

    try {

        console.clear();

        console.log("================ CREAR INSCRIPCIÓN ================");
        console.log("");

        if (store.courseSchedules.length === 0) {
            throw new Error(
                "Debe crear al menos un horario antes de crear una inscripción."
            );
        }

        if (store.students.length === 0) {
            throw new Error(
                "Debe crear al menos un estudiante antes de crear una inscripción."
            );
        }

        console.log("HORARIOS:");

        store.courseSchedules.forEach(courseSchedule => {
            console.log(
                `${courseSchedule.id}. ${courseSchedule.course.code} - ` +
                `${courseSchedule.teacher.firstName} ${courseSchedule.teacher.lastName}`
            );
        });

        const courseScheduleId =
            Number(await rl.question("Seleccione el horario: "));

        const courseSchedule = store.courseSchedules.find(
            item => item.id === courseScheduleId
        );

        if (!courseSchedule) {
            throw new Error("El horario seleccionado no existe.");
        }

        console.log("");
        console.log("ESTUDIANTES:");

        store.students.forEach(student => {
            console.log(
                `${student.id}. ${student.code} - ` +
                `${student.firstName} ${student.lastName}`
            );
        });

        const studentId =
            Number(await rl.question("Seleccione el estudiante: "));

        const student = store.students.find(
            item => item.id === studentId
        );

        if (!student) {
            throw new Error("El estudiante seleccionado no existe.");
        }

        const registerDate =
            await rl.question("Fecha de inscripción: ");

        const activeInput = await rl.question(
            "¿Inscripción activa? (s/n): "
        );

        const active = activeInput.toLowerCase() === "s";

        const factory = new InscriptionFactory();

        const inscription = factory.create({
            id: store.inscriptions.length + 1,
            courseSchedule,
            student,
            registerDate,
            active
        });

        store.inscriptions.push(inscription);
        store.notify({
            type: "inscription.created",
            data: inscription
        });

        const formatter = new InscriptionFormatter();

        console.log("");
        console.log("Inscripción creada:");

        console.dir(
            formatter.format(inscription),
            { depth: 2 }
        );

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}