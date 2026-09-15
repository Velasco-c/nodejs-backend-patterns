import Observer from "./observer.js";

export default class LoggerObserver extends Observer {
    update(event) {
        console.log(`[EVENT] ${event.type}`);
    }
}