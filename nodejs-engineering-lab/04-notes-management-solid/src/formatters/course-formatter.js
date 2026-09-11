export class CourseFormatter {
    format(course) {
        return {
            id: course.id,
            code: course.code,
            description: course.description,
            intensity: course.intensity,
            weight: course.weight,
            active: course.active
        };
    }
}