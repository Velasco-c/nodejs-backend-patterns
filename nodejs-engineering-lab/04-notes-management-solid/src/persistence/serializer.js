export default class Serializer {

    serializeStore(store) {
        return {
            identificationTypes: store.identificationTypes.map(
                identificationType =>
                    this.serializeIdentificationType(identificationType)
            ),

            cities: store.cities.map(
                city =>
                    this.serializeCity(city)
            ),

            students: store.students.map(
                student =>
                    this.serializeStudent(student)
            ),

            teachers: store.teachers.map(
                teacher =>
                    this.serializeTeacher(teacher)
            ),

            courses: store.courses.map(
                course =>
                    this.serializeCourse(course)
            ),

            classrooms: store.classrooms.map(
                classroom =>
                    this.serializeClassroom(classroom)
            ),

            topics: store.topics.map(
                topic =>
                    this.serializeTopic(topic)
            ),

            courseSchedules: store.courseSchedules.map(
                courseSchedule =>
                    this.serializeCourseSchedule(courseSchedule)
            ),

            inscriptions: store.inscriptions.map(
                inscription =>
                    this.serializeInscription(inscription)
            ),

            rates: store.rates.map(
                rate =>
                    this.serializeRate(rate)
            )
        };
    }

    serializeIdentificationType(identificationType) {
        return {
            id: identificationType.id,
            code: identificationType.code,
            name: identificationType.name,
            description: identificationType.description
        };
    }

    serializeCity(city) {
        return {
            id: city.id,
            code: city.code,
            name: city.name
        };
    }

    serializeStudent(student) {
        return {
            id: student.id,
            code: student.code,
            firstName: student.firstName,
            lastName: student.lastName,
            identificationTypeId: student.identificationType?.id,
            identificationNumber: student.identificationNumber,
            gender: student.gender,
            birthdate: student.birthdate,
            email: student.email,
            address: student.address,
            cityId: student.city?.id
        };
    }

    serializeTeacher(teacher) {
        return {
            id: teacher.id,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            identificationTypeId: teacher.identificationType?.id,
            identificationNumber: teacher.identificationNumber,
            email: teacher.email
        };
    }

    serializeCourse(course) {
        return {
            id: course.id,
            code: course.code,
            description: course.description,
            intensity: course.intensity,
            weight: course.weight,
            active: course.active
        };
    }

    serializeClassroom(classroom) {
        return {
            id: classroom.id,
            code: classroom.code,
            description: classroom.description,
            capacity: classroom.capacity,
            active: classroom.active
        };
    }

    serializeTopic(topic) {
        return {
            id: topic.id,
            courseId: topic.course?.id,
            code: topic.code,
            title: topic.title,
            description: topic.description,
            active: topic.active
        };
    }

    serializeCourseSchedule(courseSchedule) {
        return {
            id: courseSchedule.id,
            courseId: courseSchedule.course?.id,
            teacherId: courseSchedule.teacher?.id,
            classroomId: courseSchedule.classroom?.id,
            startDate: courseSchedule.startDate,
            endDate: courseSchedule.endDate,
            active: courseSchedule.active
        };
    }

    serializeInscription(inscription) {
        return {
            id: inscription.id,
            courseScheduleId: inscription.courseSchedule?.id,
            studentId: inscription.student?.id,
            registerDate: inscription.registerDate,
            active: inscription.active
        };
    }

    serializeRate(rate) {
        return {
            id: rate.id,
            inscriptionId: rate.inscription?.id,
            rate: rate.rate,
            comments: rate.comments
        };
    }
}