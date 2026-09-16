import { RateFactory } from "../factories/rate-factory.js";
import { RateFormatter } from "../formatters/rate-formatter.js";
import { store } from "../data/store.js";

export async function createRate(rl) {

    try {

        console.clear();

        console.log("================ REGISTRAR NOTA ================");
        console.log("");

        if (store.inscriptions.length === 0) {
            throw new Error(
                "Debe crear al menos una inscripción antes de registrar una nota."
            );
        }

        console.log("INSCRIPCIONES:");

        store.inscriptions.forEach(inscription => {
            console.log(
                `${inscription.id}. ` +
                `${inscription.student.firstName} ${inscription.student.lastName} - ` +
                `${inscription.courseSchedule.course.code}`
            );
        });

        const inscriptionId =
            Number(await rl.question("Seleccione la inscripción: "));

        const inscription = store.inscriptions.find(
            item => item.id === inscriptionId
        );

        if (!inscription) {
            throw new Error("La inscripción seleccionada no existe.");
        }

        const rate = Number(
            await rl.question("Nota (0 - 100): ")
        );

        const comments =
            await rl.question("Comentarios: ");

        const factory = new RateFactory();

        const newRate = factory.create({
            id: store.rates.length + 1,
            inscription,
            rate,
            comments
        });

        store.rates.push(newRate);
        store.notify({
            type: "rate.created",
            data: newRate
        });

        const formatter = new RateFormatter();

        console.log("");
        console.log("Nota registrada:");

        console.dir(
            formatter.format(newRate),
            { depth: 2 }
        );

    } catch (error) {

        console.log("");
        console.log("ERROR:", error.message);
    }

    await rl.question("\nPresione ENTER para continuar...");
}