import fs from "node:fs";
import path from "node:path";

export default class JsonStorage {

    constructor(filePath) {
        this.filePath = filePath;
    }

    save(data) {
        const json = JSON.stringify(data, null, 4);
        fs.mkdirSync(
            path.dirname(this.filePath),
            { recursive: true }
        );

        fs.writeFileSync(this.filePath, json);
    }

    load() {

        if (!fs.existsSync(this.filePath)) {
            return {
                identificationTypes: [],
                cities: [],
                students: [],
                teachers: [],
                courses: [],
                classrooms: [],
                topics: [],
                courseSchedules: [],
                inscriptions: [],
                rates: []
            };
        }

        const json = fs.readFileSync(
            this.filePath,
            "utf-8"
        );

        try {
            return JSON.parse(json);
        } catch {
            throw new Error(
                `El archivo JSON de persistencia está corrupto: ${this.filePath}`
            );
        }
    }
}