import { CourseSchedule } from "../models/course-schedule.js";
import { CourseScheduleValidator } from "../validators/course-schedule-validator.js";

export class CourseScheduleFactory {
    #validator;
    constructor(validator = new CourseScheduleValidator()) {
        this.#validator = validator;
    }
    create(data) {
        this.#validator.validate(data);
        return new CourseSchedule(
            data.id,
            data.course,
            data.teacher,
            data.classroom,
            data.startDate,
            data.endDate,
            data.active
        );
    }
}