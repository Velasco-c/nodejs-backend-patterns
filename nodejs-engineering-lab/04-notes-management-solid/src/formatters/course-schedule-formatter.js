export class CourseScheduleFormatter {
    format(courseSchedule) {
        return {
            id: courseSchedule.id,
            course: courseSchedule.course,
            teacher: courseSchedule.teacher,
            classroom: courseSchedule.classroom,
            startDate: courseSchedule.startDate,
            endDate: courseSchedule.endDate,
            active: courseSchedule.active
        };
    }
}