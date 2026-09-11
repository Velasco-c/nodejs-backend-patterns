export class Teacher {

    #id;
    #firstName;
    #lastName;
    #identificationType;
    #identificationNumber;
    #email;

    constructor(
        id,
        firstName,
        lastName,
        identificationType,
        identificationNumber,
        email
    ) {
        this.#id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.#identificationType = identificationType;
        this.identificationNumber = identificationNumber;
        this.email = email;
    }

    get id() {
        return this.#id;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        this.#lastName = value;
    }

    get identificationType() {
        return this.#identificationType;
    }

    get identificationNumber() {
        return this.#identificationNumber;
    }

    set identificationNumber(value) {
        this.#identificationNumber = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }
}