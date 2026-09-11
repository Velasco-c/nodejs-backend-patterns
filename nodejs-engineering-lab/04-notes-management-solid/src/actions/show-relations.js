import { store } from "../data/store.js";

export async function showRelations(rl) {

    try {

        console.clear();

        console.log("============= RELACIONES =============");
        console.log("");

        console.log("ESTUDIANTES");
        console.log("----------------------------------------");

        if (store.students.length === 0) {

            console.log("No existen estudiantes.");

        } else {

            store.students.forEach(student => {

                console.log(
                    `${student.id}. ${student.firstName} ${student.lastName}`
                );

                console.log(
                    `   Tipo de identificación: ` +
                    `${student.identificationType.code} - ` +
                    `${student.identificationType.name}`
                );

                console.log(
                    `   Ciudad: ` +
                    `${student.city.code} - ` +
                    `${student.city.name}`
                );

                console.log("");
            });
        }

        console.log("");
        console.log("TEMAS");
        console.log("----------------------------------------");

        if (store.topics.length === 0) {

            console.log("No existen temas.");

        } else {

            store.topics.forEach(topic => {

                console.log(
                    `${topic.id}. ${topic.code} - ${topic.title}`
                );

                console.log(
                    `   Curso: ${topic.course.code} - ` +
                    `${topic.course.description}`
                );

                console.log("");
            });
        }

        console.log("");
        console.log("HORARIOS");
        console.log("----------------------------------------");

        if (store.courseSchedules.length === 0) {

            console.log("No existen horarios.");

        } else {

            store.courseSchedules.forEach(courseSchedule => {

                console.log(
                    `${courseSchedule.id}. ` +
                    `${courseSchedule.course.code}`
                );

                console.log(
                    `   Curso: ${courseSchedule.course.description}`
                );

                console.log(
                    `   Profesor: ` +
                    `${courseSchedule.teacher.firstName} ` +
                    `${courseSchedule.teacher.lastName}`
                );

                console.log(
                    `   Aula: ${courseSchedule.classroom.code} - ` +
                    `${courseSchedule.classroom.description}`
                );

                console.log("");
            });
        }

        console.log("");
        console.log("INSCRIPCIONES");
        console.log("----------------------------------------");

        if (store.inscriptions.length === 0) {

            console.log("No existen inscripciones.");

        } else {

            store.inscriptions.forEach(inscription => {

                console.log(
                    `${inscription.id}. ` +
                    `${inscription.student.firstName} ` +
                    `${inscription.student.lastName}`
                );

                console.log(
                    `   Curso: ` +
                    `${inscription.courseSchedule.course.code}`
                );

                console.log(
                    `   Horario: ${inscription.courseSchedule.id}`
                );

                console.log("");
            });
        }

        console.log("");
        console.log("NOTAS");
        console.log("----------------------------------------");

        if (store.rates.length === 0) {

            console.log("No existen notas.");

        } else {

            store.rates.forEach(rate => {

                console.log(
                    `${rate.id}. Nota: ${rate.rate}`
                );

                console.log(
                    `   Estudiante: ` +
                    `${rate.inscription.student.firstName} ` +
                    `${rate.inscription.student.lastName}`
                );

                console.log(
                    `   Curso: ` +
                    `${rate.inscription.courseSchedule.course.code}`
                );

                console.log(
                    `   Comentarios: ${rate.comments}`
                );

                console.log("");
            });
        }

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}