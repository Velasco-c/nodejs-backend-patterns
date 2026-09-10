# Review 03 — Notes Management

Aplicación de práctica desarrollada en JavaScript para reforzar los conceptos de **Programación Orientada a Objetos**, especialmente clases, encapsulamiento y relaciones entre objetos.

El ejercicio parte de un modelo de base de datos y representa sus tablas mediante clases de JavaScript.

## Objetivo

Practicar los siguientes conceptos vistos en clase:

* Clases y objetos.
* Encapsulamiento mediante campos privados (`#`).
* Getters y setters.
* Constructores.
* Asociación entre clases.
* Composición mediante colecciones de objetos.
* Arrays como colecciones internas.
* Módulos ES (`import` / `export`).
* Creación y conexión de múltiples objetos.

## Estructura

```text
03-notes-management/
├── README.md
└── src/
    ├── identification-type.js
    ├── city.js
    ├── student.js
    ├── teacher.js
    ├── course.js
    ├── classroom.js
    ├── topic.js
    ├── course-schedule.js
    ├── inscription.js
    ├── rate.js
    └── app.js
```

## Modelo representado

Las tablas del modelo fueron convertidas en clases:

| Tabla                  | Clase                |
| ---------------------- | -------------------- |
| `identification_types` | `IdentificationType` |
| `cities`               | `City`               |
| `students`             | `Student`            |
| `teachers`             | `Teacher`            |
| `courses`              | `Course`             |
| `classrooms`           | `Classroom`          |
| `topics`               | `Topic`              |
| `courses_schedules`    | `CourseSchedule`     |
| `inscriptions`         | `Inscription`        |
| `rates`                | `Rate`               |

Las relaciones de base de datos se representan mediante referencias entre objetos.

Por ejemplo, en lugar de almacenar solamente `city_id` dentro de `Student`, se utiliza una instancia de `City`:

```js
const city = new City(1, "GUA", "Guatemala");

const student = new Student(
    1,
    "EST-001",
    "Carlos",
    "Velasco",
    identificationType,
    "1234567890101",
    "M",
    "2000-01-15",
    "carlos@example.com",
    "Ciudad de Guatemala",
    city
);
```

De esta forma:

```js
student.city
```

devuelve el objeto `City` relacionado con el estudiante.

## Relaciones principales

La aplicación construye las siguientes relaciones:

```text
IdentificationType
        │
        ├── Student
        └── Teacher

City
 └── Student

Course
 ├── Topic[]
 └── CourseSchedule[]
          │
          ├── Teacher
          ├── Classroom
          └── Inscription[]
                  │
                  ├── Student
                  └── Rate[]
```

Las colecciones privadas permiten representar relaciones de uno a muchos, por ejemplo:

```js
#topics = [];
#schedules = [];
#inscriptions = [];
#rates = [];
```

Los objetos relacionados se agregan mediante métodos como:

```js
course.addTopic(topic);
course.addSchedule(schedule);

schedule.addInscription(inscription);

inscription.addRate(rate);
```

## Encapsulamiento

Los atributos principales de las clases se mantienen privados mediante la sintaxis `#`.

Ejemplo:

```js
class Course {

    #id;
    #code;
    #description;

    constructor(id, code, description) {
        this.#id = id;
        this.code = code;
        this.description = description;
    }

    get id() {
        return this.#id;
    }
}
```

El acceso a los atributos privados se realiza mediante getters y setters cuando corresponde.

Esto permite controlar cómo se leen o modifican los datos y evita acceder directamente a los campos privados.

## Prueba

La aplicación de prueba se encuentra en:

```text
src/app.js
```

Ejecutar desde la raíz del proyecto:

```bash
node nodejs-engineering-lab/03-notes-management/src/app.js
```

La ejecución crea objetos de todas las clases y establece sus relaciones.

Una ejecución correcta muestra información similar a:

```text
ESTUDIANTE
Student {}

CIUDAD DEL ESTUDIANTE
City {}

CURSO
Course {}

TEMAS DEL CURSO
[ Topic {} ]

HORARIOS DEL CURSO
[ CourseSchedule {} ]

INSCRIPCIONES
[ Inscription {} ]

NOTAS
[ Rate {} ]
```

### ¿Por qué aparecen `{}`?

Los atributos están encapsulados mediante **campos privados de JavaScript (`#`)**. Por esta razón, `console.log()` no muestra directamente esos atributos internos al imprimir la instancia.

Esto no significa que los objetos estén vacíos.

Las relaciones pueden comprobarse accediendo mediante sus getters:

```js
console.log(student.city);
console.log(course.topics);
console.log(course.schedules);
console.log(schedule.inscriptions);
console.log(inscription.rates);
```

Por ejemplo, `course.topics` contiene la instancia de `Topic` agregada al curso y `inscription.rates` contiene la instancia de `Rate` relacionada con la inscripción.

## Resultado

Con este ejercicio se construyó una representación orientada a objetos de un modelo relacional, transformando:

```text
Tablas + claves foráneas
```

en:

```text
Clases + objetos relacionados
```

El ejercicio permite practicar cómo las relaciones de un modelo de datos pueden representarse mediante **asociaciones y colecciones de objetos en JavaScript**.
