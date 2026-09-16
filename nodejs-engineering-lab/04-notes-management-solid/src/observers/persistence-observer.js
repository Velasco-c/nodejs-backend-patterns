import Observer from "./observer.js";

export default class PersistenceObserver extends Observer {

    constructor(persistenceService, store) {
        super();

        this.persistenceService = persistenceService;
        this.store = store;
    }

    update() {
        this.persistenceService.save(this.store);
    }
}