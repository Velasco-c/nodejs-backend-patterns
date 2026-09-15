import { CourseScheduleFactory } from "../factories/course-schedule-factory.js";
import { CourseScheduleFormatter } from "../formatters/course-schedule-formatter.js";
import { store } from "../data/store.js";

export async function createCourseSchedule(rl) {

    try {

        console.clear();

        console.log("================ CREAR HORARIO ================");
        console.log("");

        if (store.courses.length === 0) {
            throw new Error(
                "Debe crear al menos un curso antes de crear un horario."
            );
        }

        if (store.teachers.length === 0) {
            throw new Error(
                "Debe crear al menos un profesor antes de crear un horario."
            );
        }

        if (store.classrooms.length === 0) {
            throw new Error(
                "Debe crear al menos un aula antes de crear un horario."
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

        console.log("");
        console.log("PROFESORES:");

        store.teachers.forEach(teacher => {
            console.log(
                `${teacher.id}. ${teacher.firstName} ${teacher.lastName}`
            );
        });

        const teacherId =
            Number(await rl.question("Seleccione el profesor: "));

        const teacher = store.teachers.find(
            item => item.id === teacherId
        );

        if (!teacher) {
            throw new Error("El profesor seleccionado no existe.");
        }

        console.log("");
        console.log("AULAS:");

        store.classrooms.forEach(classroom => {
            console.log(
                `${classroom.id}. ${classroom.code} - ${classroom.description}`
            );
        });

        const classroomId =
            Number(await rl.question("Seleccione el aula: "));

        const classroom = store.classrooms.find(
            item => item.id === classroomId
        );

        if (!classroom) {
            throw new Error("El aula seleccionada no existe.");
        }

        const startDate =
            await rl.question("Fecha de inicio: ");

        const endDate =
            await rl.question("Fecha de finalización: ");

        const activeInput = await rl.question(
            "¿Horario activo? (s/n): "
        );

        const active = activeInput.toLowerCase() === "s";

        const factory = new CourseScheduleFactory();

        const courseSchedule = factory.create({
            id: store.courseSchedules.length + 1,
            course,
            teacher,
            classroom,
            startDate,
            endDate,
            active
        });

        store.courseSchedules.push(courseSchedule);
        store.notify({
            type: "courseSchedule.created",
            data: courseSchedule
        });

        const formatter = new CourseScheduleFormatter();

        console.log("");
        console.log("Horario creado:");

        console.dir(
            formatter.format(courseSchedule),
            { depth: 2 }
        );

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}