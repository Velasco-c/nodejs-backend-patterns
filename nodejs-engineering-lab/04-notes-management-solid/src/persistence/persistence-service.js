import JsonStorage from "./json-storage.js";
import Serializer from "./serializer.js";
import Deserializer from "./deserializer.js";

export default class PersistenceService {

    constructor(filePath) {
        this.storage = new JsonStorage(filePath);
        this.serializer = new Serializer();
        this.deserializer = new Deserializer();
    }

    save(store) {
        const data = this.serializer.serializeStore(store);
        this.storage.save(data);
    }

    load(factories) {
        const data = this.storage.load();
        return this.deserializer.deserializeStore(
            data,
            factories
        );
    }
}