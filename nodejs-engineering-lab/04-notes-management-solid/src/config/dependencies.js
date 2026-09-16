import { store } from "../data/store.js";

import LoggerObserver from "../observers/logger-observer.js";
import PersistenceObserver from "../observers/persistence-observer.js";

import PersistenceService from "../persistence/persistence-service.js";

import { IdentificationTypeFactory } from "../factories/identification-type-factory.js";
import { CityFactory } from "../factories/city-factory.js";
import { StudentFactory } from "../factories/student-factory.js";
import { TeacherFactory } from "../factories/teacher-factory.js";
import { CourseFactory } from "../factories/course-factory.js";
import { ClassroomFactory } from "../factories/classroom-factory.js";
import { TopicFactory } from "../factories/topic-factory.js";
import { CourseScheduleFactory } from "../factories/course-schedule-factory.js";
import { InscriptionFactory } from "../factories/inscription-factory.js";
import { RateFactory } from "../factories/rate-factory.js";

const factories = {
    identificationType: new IdentificationTypeFactory(),
    city: new CityFactory(),
    student: new StudentFactory(),
    teacher: new TeacherFactory(),
    course: new CourseFactory(),
    classroom: new ClassroomFactory(),
    topic: new TopicFactory(),
    courseSchedule: new CourseScheduleFactory(),
    inscription: new InscriptionFactory(),
    rate: new RateFactory()
};

const persistenceService = new PersistenceService(
    "./src/storage/data.json"
);

const restoredStore = persistenceService.load(factories);

Object.assign(store, restoredStore);

const loggerObserver = new LoggerObserver();

store.addObserver(loggerObserver);

const persistenceObserver = new PersistenceObserver(
    persistenceService,
    store
);

store.addObserver(persistenceObserver);

export {
    store,
    factories,
    persistenceService
};