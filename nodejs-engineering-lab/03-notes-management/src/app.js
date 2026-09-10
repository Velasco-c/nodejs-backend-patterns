import { IdentificationType } from "./identification-type.js";
import { City } from "./city.js";
import { Student } from "./student.js";
import { Teacher } from "./teacher.js";
import { Course } from "./course.js";
import { Classroom } from "./classroom.js";
import { Topic } from "./topic.js";
import { CourseSchedule } from "./course-schedule.js";
import { Inscription } from "./inscription.js";
import { Rate } from "./rate.js";

const identificationType = new IdentificationType(
    1,
    "DPI",
    "Documento Personal de Identificación",
    "Documento oficial de identificación"
);

const city = new City(
    1,
    "GUA",
    "Guatemala"
);

const student = new Student(
    1,
    "EST-001",
    "Carlos",
    "Velasco",
    identificationType,
    "1234567890101",
    "M",
    "2000-01-15",
    "carlos@example.com",
    "Ciudad de Guatemala",
    city
);

const teacher = new Teacher(
    1,
    "Juan",
    "Pérez",
    identificationType,
    "9876543210101",
    "juan@example.com"
);

const classroom = new Classroom(
    1,
    "A-101",
    "Aula principal",
    30,
    true
);

const course = new Course(
    1,
    "JS",
    "JavaScript",
    40,
    10,
    true
);

const topic = new Topic(
    1,
    course,
    "JS-01",
    "Programación Orientada a Objetos",
    "Clases, objetos y relaciones",
    true
);

const schedule = new CourseSchedule(
    1,
    course,
    teacher,
    classroom,
    "2026-09-10",
    "2026-12-10",
    true
);

const inscription = new Inscription(
    1,
    schedule,
    student,
    "2026-09-10",
    true
);

const rate = new Rate(
    1,
    inscription,
    95,
    "Buen desempeño"
);

course.addTopic(topic);
course.addSchedule(schedule);

schedule.addInscription(inscription);

inscription.addRate(rate);

console.log("ESTUDIANTE");
console.log(student);

console.log("\nCIUDAD DEL ESTUDIANTE");
console.log(student.city);

console.log("\nCURSO");
console.log(course);

console.log("\nTEMAS DEL CURSO");
console.log(course.topics);

console.log("\nHORARIOS DEL CURSO");
console.log(course.schedules);

console.log("\nINSCRIPCIONES");
console.log(schedule.inscriptions);

console.log("\nNOTAS");
console.log(inscription.rates);