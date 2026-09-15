export default class Observer {
    update(event) {
        throw new Error("Observer must implement update()");
    }
}