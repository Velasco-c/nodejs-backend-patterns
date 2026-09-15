import * as readline from "readline/promises";
import { store } from "./data/store.js";
import LoggerObserver from "./observers/logger-observer.js";

import { createIdentificationType } from "./actions/create-identification-type.js";
import { createCity } from "./actions/create-city.js";
import { createStudent } from "./actions/create-student.js";
import { createTeacher } from "./actions/create-teacher.js";
import { createCourse } from "./actions/create-course.js";
import { createClassroom } from "./actions/create-classroom.js";
import { createTopic } from "./actions/create-topic.js";
import { createCourseSchedule } from "./actions/create-course-schedule.js";
import { createInscription } from "./actions/create-inscription.js";
import { createRate } from "./actions/create-rate.js";
import { listInformation } from "./actions/list-information.js";
import { showRelations } from "./actions/show-relations.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const loggerObserver = new LoggerObserver();
store.addObserver(loggerObserver);

let opc = "";

while (opc !== "0") {

    console.clear();

    console.log("============= NOTES MANAGEMENT - SOLID =============");
    console.log("");
    console.log(" 1. Crear tipo de identificación");
    console.log(" 2. Crear ciudad");
    console.log(" 3. Crear estudiante");
    console.log(" 4. Crear profesor");
    console.log(" 5. Crear curso");
    console.log(" 6. Crear aula");
    console.log(" 7. Crear tema");
    console.log(" 8. Crear horario");
    console.log(" 9. Crear inscripción");
    console.log("10. Registrar nota");
    console.log("11. Listar información");
    console.log("12. Ver relaciones");
    console.log(" 0. Salir");
    console.log("");

    opc = await rl.question("--->> Elija una opción: ");

    switch (opc) {

        case "1":
            await createIdentificationType(rl);
            break;

        case "2":
            await createCity(rl);
            break;

        case "3":
            await createStudent(rl);
            break;

        case "4":
            await createTeacher(rl);
            break;

        case "5":
            await createCourse(rl);
            break;

        case "6":
            await createClassroom(rl);
            break;

        case "7":
            await createTopic(rl);
            break;

        case "8":
            await createCourseSchedule(rl);
            break;

        case "9":
            await createInscription(rl);
            break;

        case "10":
            await createRate(rl);
            break;

        case "11":
            await listInformation(rl);
            break;

        case "12":
            await showRelations(rl);
            break;

        case "0":
            console.log("");
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("");
            console.log("Opción no válida.");
            await rl.question("\nPresione ENTER para continuar...");
    }
}

rl.close();