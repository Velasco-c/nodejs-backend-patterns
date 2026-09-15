export const store = {

    identificationTypes: [],
    cities: [],
    students: [],
    teachers: [],
    courses: [],
    classrooms: [],
    topics: [],
    courseSchedules: [],
    inscriptions: [],
    rates: [],

    observers: [],

    addObserver(observer) {
        this.observers.push(observer);
    },

    removeObserver(observer) {
        this.observers = this.observers.filter(
            currentObserver => currentObserver !== observer
        );
    },

    notify(event) {
        this.observers.forEach(observer => {
            observer.update(event);
        });
    }
};