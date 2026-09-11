export class Student {

    #id;
    #code;
    #firstName;
    #lastName;
    #identificationType;
    #identificationNumber;
    #gender;
    #birthdate;
    #email;
    #address;
    #city;

    constructor(
        id,
        code,
        firstName,
        lastName,
        identificationType,
        identificationNumber,
        gender,
        birthdate,
        email,
        address,
        city
    ) {
        this.#id = id;
        this.code = code;
        this.firstName = firstName;
        this.lastName = lastName;
        this.#identificationType = identificationType;
        this.identificationNumber = identificationNumber;
        this.gender = gender;
        this.birthdate = birthdate;
        this.email = email;
        this.address = address;
        this.#city = city;
    }

    get id() {
        return this.#id;
    }

    get code() {
        return this.#code;
    }

    set code(value) {
        this.#code = value;
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

    get gender() {
        return this.#gender;
    }

    set gender(value) {
        this.#gender = value;
    }

    get birthdate() {
        return this.#birthdate;
    }

    set birthdate(value) {
        this.#birthdate = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get address() {
        return this.#address;
    }

    set address(value) {
        this.#address = value;
    }

    get city() {
        return this.#city;
    }
}