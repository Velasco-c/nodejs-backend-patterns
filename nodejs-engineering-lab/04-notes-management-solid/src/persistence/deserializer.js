export default class Deserializer {

    deserializeStore(data, factories) {
        const identificationTypes = data.identificationTypes.map(
            identificationType =>
                factories.identificationType.create(identificationType)
        );

        const cities = data.cities.map(
            city =>
                factories.city.create(city)
        );

        const courses = data.courses.map(
            course =>
                factories.course.create(course)
        );

        const classrooms = data.classrooms.map(
            classroom =>
                factories.classroom.create(classroom)
        );

        const identificationTypeById = new Map(
            identificationTypes.map(
                identificationType =>
                    [identificationType.id, identificationType]
            )
        );

        const cityById = new Map(
            cities.map(
                city =>
                    [city.id, city]
            )
        );

        const courseById = new Map(
            courses.map(
                course =>
                    [course.id, course]
            )
        );

        const classroomById = new Map(
            classrooms.map(
                classroom =>
                    [classroom.id, classroom]
            )
        );

        const students = data.students.map(student => {
            return factories.student.create({
                ...student,
                identificationType:
                    identificationTypeById.get(
                        student.identificationTypeId
                    ),
                city:
                    cityById.get(student.cityId)
            });
        });

        const teachers = data.teachers.map(teacher => {
            return factories.teacher.create({
                ...teacher,
                identificationType:
                    identificationTypeById.get(
                        teacher.identificationTypeId
                    )
            });
        });

        const studentById = new Map(
            students.map(
                student =>
                    [student.id, student]
            )
        );

        const teacherById = new Map(
            teachers.map(
                teacher =>
                    [teacher.id, teacher]
            )
        );

        const topics = data.topics.map(topic => {
            return factories.topic.create({
                ...topic,
                course:
                    courseById.get(topic.courseId)
            });
        });

        const courseSchedules = data.courseSchedules.map(
            courseSchedule => {
                return factories.courseSchedule.create({
                    ...courseSchedule,
                    course:
                        courseById.get(courseSchedule.courseId),
                    teacher:
                        teacherById.get(courseSchedule.teacherId),
                    classroom:
                        classroomById.get(courseSchedule.classroomId)
                });
            }
        );

        const courseScheduleById = new Map(
            courseSchedules.map(
                courseSchedule =>
                    [courseSchedule.id, courseSchedule]
            )
        );

        const inscriptions = data.inscriptions.map(
            inscription => {
                return factories.inscription.create({
                    ...inscription,
                    courseSchedule:
                        courseScheduleById.get(
                            inscription.courseScheduleId
                        ),
                    student:
                        studentById.get(inscription.studentId)
                });
            }
        );

        const inscriptionById = new Map(
            inscriptions.map(
                inscription =>
                    [inscription.id, inscription]
            )
        );

        const rates = data.rates.map(rate => {
            return factories.rate.create({
                ...rate,
                inscription:
                    inscriptionById.get(rate.inscriptionId)
            });
        });

        topics.forEach(topic => {
            topic.course?.addTopic(topic);
        });

        courseSchedules.forEach(courseSchedule => {
            courseSchedule.course?.addSchedule(courseSchedule);
        });

        inscriptions.forEach(inscription => {
            inscription.courseSchedule?.addInscription(inscription);
        });

        rates.forEach(rate => {
            rate.inscription?.addRate(rate);
        });

        return {
            identificationTypes,
            cities,
            students,
            teachers,
            courses,
            classrooms,
            topics,
            courseSchedules,
            inscriptions,
            rates
        };
    }
}