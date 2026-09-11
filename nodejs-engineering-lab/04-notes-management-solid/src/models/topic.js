export class Topic {

    #id;
    #course;
    #code;
    #title;
    #description;
    #active;

    constructor(
        id,
        course,
        code,
        title,
        description,
        active
    ) {
        this.#id = id;
        this.#course = course;
        this.code = code;
        this.title = title;
        this.description = description;
        this.active = active;
    }

    get id() {
        return this.#id;
    }

    get course() {
        return this.#course;
    }

    get code() {
        return this.#code;
    }

    set code(value) {
        this.#code = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    get active() {
        return this.#active;
    }

    set active(value) {
        this.#active = value;
    }
}