import Observer from "./observer.js";

export default class PersistenceObserver extends Observer {

    constructor(persistenceService, store) {
        super();

        this.persistenceService = persistenceService;
        this.store = store;
    }

    update(event) {
        this.persistenceService.save(this.store);
    }
}