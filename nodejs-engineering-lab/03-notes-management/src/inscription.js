export class Inscription {

    #id;
    #courseSchedule;
    #student;
    #registerDate;
    #active;
    #rates = [];

    constructor(
        id,
        courseSchedule,
        student,
        registerDate,
        active
    ) {
        this.#id = id;
        this.#courseSchedule = courseSchedule;
        this.#student = student;
        this.registerDate = registerDate;
        this.active = active;
    }

    get id() {
        return this.#id;
    }

    get courseSchedule() {
        return this.#courseSchedule;
    }

    get student() {
        return this.#student;
    }

    get registerDate() {
        return this.#registerDate;
    }

    set registerDate(value) {
        this.#registerDate = value;
    }

    get active() {
        return this.#active;
    }

    set active(value) {
        this.#active = value;
    }

    get rates() {
        return this.#rates;
    }

    addRate(rate) {
        this.#rates.push(rate);
    }
}