import { IdentificationTypeFormatter } from "../formatters/identification-type-formatter.js";
import { CityFormatter } from "../formatters/city-formatter.js";
import { StudentFormatter } from "../formatters/student-formatter.js";
import { TeacherFormatter } from "../formatters/teacher-formatter.js";
import { CourseFormatter } from "../formatters/course-formatter.js";
import { ClassroomFormatter } from "../formatters/classroom-formatter.js";
import { TopicFormatter } from "../formatters/topic-formatter.js";
import { CourseScheduleFormatter } from "../formatters/course-schedule-formatter.js";
import { InscriptionFormatter } from "../formatters/inscription-formatter.js";
import { RateFormatter } from "../formatters/rate-formatter.js";

import { store } from "../data/store.js";

export async function listInformation(rl) {

    try {

        console.clear();

        console.log("============= LISTAR INFORMACIÓN =============");
        console.log("");

        const identificationTypeFormatter =
            new IdentificationTypeFormatter();

        const cityFormatter =
            new CityFormatter();

        const studentFormatter =
            new StudentFormatter();

        const teacherFormatter =
            new TeacherFormatter();

        const courseFormatter =
            new CourseFormatter();

        const classroomFormatter =
            new ClassroomFormatter();

        const topicFormatter =
            new TopicFormatter();

        const courseScheduleFormatter =
            new CourseScheduleFormatter();

        const inscriptionFormatter =
            new InscriptionFormatter();

        const rateFormatter =
            new RateFormatter();

        console.log("TIPOS DE IDENTIFICACIÓN");

        store.identificationTypes.forEach(item => {
            console.log(
                identificationTypeFormatter.format(item)
            );
        });

        console.log("");
        console.log("CIUDADES");

        store.cities.forEach(item => {
            console.log(
                cityFormatter.format(item)
            );
        });

        console.log("");
        console.log("ESTUDIANTES");

        store.students.forEach(item => {
            console.dir(
                studentFormatter.format(item),
                { depth: 2 }
            );
        });

        console.log("");
        console.log("PROFESORES");

        store.teachers.forEach(item => {
            console.dir(
                teacherFormatter.format(item),
                { depth: 2 }
            );
        });

        console.log("");
        console.log("CURSOS");

        store.courses.forEach(item => {
            console.log(
                courseFormatter.format(item)
            );
        });

        console.log("");
        console.log("AULAS");

        store.classrooms.forEach(item => {
            console.log(
                classroomFormatter.format(item)
            );
        });

        console.log("");
        console.log("TEMAS");

        store.topics.forEach(item => {
            console.dir(
                topicFormatter.format(item),
                { depth: 2 }
            );
        });

        console.log("");
        console.log("HORARIOS");

        store.courseSchedules.forEach(item => {
            console.dir(
                courseScheduleFormatter.format(item),
                { depth: 2 }
            );
        });

        console.log("");
        console.log("INSCRIPCIONES");

        store.inscriptions.forEach(item => {
            console.dir(
                inscriptionFormatter.format(item),
                { depth: 2 }
            );
        });

        console.log("");
        console.log("NOTAS");

        store.rates.forEach(item => {
            console.dir(
                rateFormatter.format(item),
                { depth: 2 }
            );
        });

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}