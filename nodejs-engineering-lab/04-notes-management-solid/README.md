# Notes Management — SOLID

Aplicación de consola desarrollada con **Node.js y JavaScript ES Modules** para aplicar principios SOLID sobre el sistema de gestión de notas construido en el Review 03.

El proyecto conserva el modelo de entidades del ejercicio anterior, pero reorganiza la lógica para mantener el código más limpio, separado y fácil de mantener.

---

## 1. Objetivo

Aplicar los principios **SOLID** sobre la lógica del sistema de notas, separando las responsabilidades principales de la aplicación.

El objetivo no es crear una gran cantidad de abstracciones innecesarias, sino evitar que un único archivo tenga que encargarse de:

* Crear objetos.
* Validar datos.
* Mostrar información.
* Mantener el estado.
* Gestionar relaciones.
* Controlar el menú.

La aplicación funciona completamente en memoria mediante un `store`.

---

## 2. Tecnologías

* Node.js
* JavaScript
* ES Modules
* `readline/promises`
* Programación Orientada a Objetos
* Principios SOLID

No se utilizan dependencias externas.

---

## 3. Estructura del proyecto

```text
04-notes-management-solid
├── package.json
├── README.md
└── src
    ├── actions
    │   ├── create-city.js
    │   ├── create-classroom.js
    │   ├── create-course.js
    │   ├── create-course-schedule.js
    │   ├── create-identification-type.js
    │   ├── create-inscription.js
    │   ├── create-rate.js
    │   ├── create-student.js
    │   ├── create-teacher.js
    │   ├── create-topic.js
    │   ├── list-information.js
    │   └── show-relations.js
    │
    ├── app.js
    │
    ├── data
    │   └── store.js
    │
    ├── factories
    │   ├── city-factory.js
    │   ├── classroom-factory.js
    │   ├── course-factory.js
    │   ├── course-schedule-factory.js
    │   ├── identification-type-factory.js
    │   ├── inscription-factory.js
    │   ├── rate-factory.js
    │   ├── student-factory.js
    │   ├── teacher-factory.js
    │   └── topic-factory.js
    │
    ├── formatters
    │   ├── city-formatter.js
    │   ├── classroom-formatter.js
    │   ├── course-formatter.js
    │   ├── course-schedule-formatter.js
    │   ├── identification-type-formatter.js
    │   ├── inscription-formatter.js
    │   ├── rate-formatter.js
    │   ├── student-formatter.js
    │   ├── teacher-formatter.js
    │   └── topic-formatter.js
    │
    ├── models
    │   ├── city.js
    │   ├── classroom.js
    │   ├── course.js
    │   ├── course-schedule.js
    │   ├── identification-type.js
    │   ├── inscription.js
    │   ├── rate.js
    │   ├── student.js
    │   ├── teacher.js
    │   └── topic.js
    │
    └── validators
        ├── city-validator.js
        ├── classroom-validator.js
        ├── course-schedule-validator.js
        ├── course-validator.js
        ├── identification-type-validator.js
        ├── inscription-validator.js
        ├── rate-validator.js
        ├── student-validator.js
        ├── teacher-validator.js
        └── topic-validator.js
```

---

## 4. Responsabilidad de cada carpeta

### `models`

Contiene las entidades del sistema.

Ejemplos:

```text
Student
Teacher
Course
Classroom
Topic
CourseSchedule
Inscription
Rate
```

Los modelos representan los datos y sus relaciones mediante objetos.

---

### `validators`

Cada entidad tiene su propio validador.

Ejemplo:

```text
Student
   ↓
StudentValidator
```

La validación se mantiene fuera del modelo y fuera del menú.

Esto permite que las reglas de validación tengan una responsabilidad independiente.

---

### `factories`

Cada entidad tiene una Factory encargada de construir su objeto.

El flujo es:

```text
Action
   ↓
Factory
   ↓
Validator
   ↓
Model
```

Por ejemplo:

```text
createStudent()
      ↓
StudentFactory
      ↓
StudentValidator
      ↓
Student
```

Esto evita construir directamente los modelos desde el menú.

---

### `formatters`

Los formatters preparan los objetos para mostrarlos en consola.

Por ejemplo:

```text
Student
   ↓
StudentFormatter
   ↓
Objeto listo para mostrar
```

Esto evita mezclar la lógica de presentación con los modelos.

---

### `actions`

Cada operación del sistema tiene su propio archivo.

Ejemplos:

```text
create-student.js
create-course.js
create-topic.js
create-rate.js
list-information.js
show-relations.js
```

Cada action representa una operación concreta de la aplicación.

Todas las acciones son funciones `async` y reciben la interfaz `readline`.

---

### `data/store.js`

Mantiene el estado de la aplicación en memoria.

```js
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
    rates: []
};
```

No se utiliza una base de datos en este ejercicio.

---

### `app.js`

Es el punto de entrada de la aplicación.

Su responsabilidad se mantiene pequeña:

```text
Mostrar menú
     ↓
Leer opción
     ↓
Ejecutar action
     ↓
Esperar
     ↓
Volver al menú
```

El `app.js` no contiene la lógica de creación, validación o presentación de las entidades.

---

# 5. ¿Por qué se separó de esta manera?

La principal razón es mantener el código **limpio, organizado y fácil de mantener**.

En una aplicación pequeña sería posible colocar toda la lógica en `app.js`, pero rápidamente terminaríamos con un archivo encargado de demasiadas responsabilidades.

La separación permite que cada componente tenga un propósito claro:

```text
app.js
   → controla el menú

actions
   → ejecutan operaciones

factories
   → construyen entidades

validators
   → validan datos

models
   → representan entidades

formatters
   → preparan información

store
   → mantiene el estado
```

De esta forma, si posteriormente cambia una regla de validación, no es necesario modificar el menú.

Si cambia la forma de mostrar una entidad, no es necesario modificar el modelo.

Si cambia la forma de crear una entidad, no es necesario modificar `app.js`.

Esta separación ayuda principalmente a mantener **alta cohesión y bajo acoplamiento**.

---

# 6. Principios SOLID aplicados

## SRP — Single Responsibility Principle

Cada componente tiene una responsabilidad específica.

Ejemplo:

```text
StudentValidator
    → validar Student

StudentFactory
    → crear Student

StudentFormatter
    → preparar Student para mostrar

createStudent()
    → ejecutar el caso de uso de crear Student
```

No se concentra toda la responsabilidad en una única clase o archivo.

---

## OCP — Open/Closed Principle

Las funcionalidades están separadas por componentes.

Agregar una nueva operación permite crear una nueva action sin convertir `app.js` en un archivo cada vez más grande.

---

## LSP — Liskov Substitution Principle

Los componentes utilizados por las factories mantienen contratos sencillos y coherentes.

Los validators reciben datos y realizan la validación antes de construir las entidades.

---

## ISP — Interface Segregation Principle

JavaScript no utiliza interfaces nativas como otros lenguajes, por lo que se mantienen responsabilidades pequeñas mediante clases y funciones específicas.

No se crea una clase gigantesca que obligue a todas las entidades a implementar funcionalidades que no necesitan.

---

## DIP — Dependency Inversion Principle

Las factories reciben el validator como dependencia:

```js
constructor(validator = new StudentValidator()) {
    this.#validator = validator;
}
```

Esto permite utilizar otro validator compatible sin modificar la lógica interna de la factory.

---

# 7. Relaciones entre entidades

El sistema mantiene las relaciones utilizando referencias entre objetos.

```text
Student
├── IdentificationType
└── City

Topic
└── Course

CourseSchedule
├── Course
├── Teacher
└── Classroom

Inscription
├── CourseSchedule
└── Student

Rate
└── Inscription
```

Esto permite consultar directamente las relaciones:

```js
student.city
student.identificationType

topic.course

courseSchedule.course
courseSchedule.teacher
courseSchedule.classroom

inscription.student
inscription.courseSchedule

rate.inscription
```

---

# 8. Requisitos

Se necesita tener instalado:

```bash
node --version
```

Se recomienda utilizar una versión moderna de Node.js con soporte para ES Modules y `readline/promises`.

No es necesario instalar paquetes externos.

---

# 9. Preparar el proyecto

Desde la raíz del repositorio:

```bash
cd nodejs-engineering-lab/04-notes-management-solid
```

Verificar el contenido:

```bash
tree
```

El proyecto debe contener:

```text
package.json
README.md
src/
```

---

# 10. Configuración de Node.js

El proyecto utiliza ES Modules mediante:

```json
{
    "type": "module"
}
```

Esto permite utilizar imports como:

```js
import { StudentFactory } from "./factories/student-factory.js";
```

y exports como:

```js
export async function createStudent(rl) {
    // ...
}
```

---

# 11. Ejecutar la aplicación

Desde:

```text
nodejs-engineering-lab/04-notes-management-solid
```

ejecutar:

```bash
node src/app.js
```

También puede ejecutarse directamente desde la raíz del repositorio:

```bash
node nodejs-engineering-lab/04-notes-management-solid/src/app.js
```

---

# 12. Menú principal

Al iniciar la aplicación se muestra:

```text
============= NOTES MANAGEMENT - SOLID =============

 1. Crear tipo de identificación
 2. Crear ciudad
 3. Crear estudiante
 4. Crear profesor
 5. Crear curso
 6. Crear aula
 7. Crear tema
 8. Crear horario
 9. Crear inscripción
10. Registrar nota
11. Listar información
12. Ver relaciones
 0. Salir
```

---

# 13. Orden recomendado de uso

Como existen relaciones entre las entidades, se recomienda crearlas en este orden:

```text
1. Tipo de identificación
2. Ciudad
3. Estudiante
4. Profesor
5. Curso
6. Aula
7. Tema
8. Horario
9. Inscripción
10. Nota
```

Después pueden utilizarse:

```text
11. Listar información
12. Ver relaciones
```

---

# 14. Ejemplo de flujo

### Crear tipo de identificación

```text
1
```

```text
Código: cc
Nombre: Cedula de Ciudadania
Descripción: Documento de identificacion para ciudadanos
```

### Crear ciudad

```text
2
```

```text
Código: GUA
Nombre: Guatemala
```

### Crear estudiante

```text
3
```

El estudiante puede seleccionar las entidades existentes:

```text
TIPOS DE IDENTIFICACIÓN:
1. cc - Cedula de Ciudadania

CIUDADES:
1. GUA - Guatemala
```

### Crear curso

```text
5
```

### Crear aula

```text
6
```

### Crear tema

```text
7
```

El tema se relaciona con un curso existente.

### Crear horario

```text
8
```

El horario relaciona:

```text
Curso
Profesor
Aula
```

### Crear inscripción

```text
9
```

La inscripción relaciona:

```text
Estudiante
Horario
```

### Registrar nota

```text
10
```

La nota se relaciona con una inscripción existente.

---

# 15. Listar información

La opción:

```text
11
```

muestra las entidades almacenadas en `store`.

Los datos se pasan primero por sus respectivos formatters para separar la presentación de los modelos.

---

# 16. Ver relaciones

La opción:

```text
12
```

muestra las relaciones creadas entre las entidades.

Ejemplo:

```text
ESTUDIANTES
----------------------------------------
1. Carlos Velasco
   Tipo de identificación: cc - Cedula de Ciudadania
   Ciudad: GUA - Guatemala
```

Otro ejemplo:

```text
HORARIOS
----------------------------------------
1. JS001
   Curso: Javascript
   Profesor: Ana Lopez
   Aula: AULA01 - Laboratorio de programacion
```

Y las notas:

```text
NOTAS
----------------------------------------
1. Nota: 92
   Estudiante: Carlos Velasco
   Curso: JS001
   Comentarios: Excelente desempeño orientado a objetos
```

---

# 17. Manejo de errores

Las actions manejan sus propios errores mediante `try/catch`.

Ejemplo:

```js
try {

    // operación

} catch (error) {

    console.log("ERROR:", error.message);
}
```

Las validaciones son responsabilidad de los validators.

Por ejemplo, una nota fuera del rango permitido:

```text
Nota < 0
Nota > 100
```

produce un error desde:

```text
RateValidator
```

y no desde `app.js`.

---

# 18. Flujo general de una operación

Por ejemplo, crear un estudiante:

```text
Usuario
   │
   ▼
app.js
   │
   ▼
createStudent()
   │
   ▼
StudentFactory
   │
   ▼
StudentValidator
   │
   ▼
Student
   │
   ▼
store.students
   │
   ▼
StudentFormatter
   │
   ▼
Consola
```

Esto permite mantener cada parte del código enfocada en una responsabilidad concreta.

---

# 19. Resultado

El Review 04 toma la aplicación del Review 03 y reorganiza su arquitectura para trabajar con una separación de responsabilidades más clara.

La estructura final permite:

* Mantener `app.js` pequeño.
* Separar cada caso de uso.
* Centralizar el estado en `store.js`.
* Separar validación de creación.
* Separar creación de presentación.
* Mantener las relaciones entre objetos.
* Facilitar futuras modificaciones.
* Reducir el acoplamiento entre componentes.

La intención principal de esta implementación es aplicar SOLID de forma práctica, manteniendo el código **limpio, organizado y mantenible**, sin agregar abstracciones que no aporten una responsabilidad real.
