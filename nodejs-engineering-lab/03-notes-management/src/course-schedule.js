export class CourseSchedule {

    #id;
    #course;
    #teacher;
    #classroom;
    #startDate;
    #endDate;
    #active;
    #inscriptions = [];

    constructor(
        id,
        course,
        teacher,
        classroom,
        startDate,
        endDate,
        active
    ) {
        this.#id = id;
        this.#course = course;
        this.#teacher = teacher;
        this.#classroom = classroom;
        this.startDate = startDate;
        this.endDate = endDate;
        this.active = active;
    }

    get id() {
        return this.#id;
    }

    get course() {
        return this.#course;
    }

    get teacher() {
        return this.#teacher;
    }

    get classroom() {
        return this.#classroom;
    }

    get startDate() {
        return this.#startDate;
    }

    set startDate(value) {
        this.#startDate = value;
    }

    get endDate() {
        return this.#endDate;
    }

    set endDate(value) {
        this.#endDate = value;
    }

    get active() {
        return this.#active;
    }

    set active(value) {
        this.#active = value;
    }

    get inscriptions() {
        return this.#inscriptions;
    }

    addInscription(inscription) {
        this.#inscriptions.push(inscription);
    }
}