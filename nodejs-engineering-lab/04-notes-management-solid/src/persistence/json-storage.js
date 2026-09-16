import fs from "node:fs";

export default class JsonStorage {

    constructor(filePath) {
        this.filePath = filePath;
    }

    save(data) {
        const json = JSON.stringify(data, null, 4);

        fs.writeFileSync(this.filePath, json);
    }

    load() {
        const json = fs.readFileSync(this.filePath, "utf-8");

        return JSON.parse(json);
    }
}