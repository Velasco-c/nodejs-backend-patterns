# Notes Management — SOLID

Aplicación de consola desarrollada con **Node.js y JavaScript ES Modules** para aplicar principios SOLID, Programación Orientada a Objetos, patrones de diseño y separación de responsabilidades sobre un sistema de gestión académica.

El proyecto parte del sistema desarrollado en el Review 03 y evoluciona su arquitectura para separar:

* Casos de uso.
* Modelos de dominio.
* Validaciones.
* Construcción de entidades.
* Presentación.
* Estado de la aplicación.
* Eventos.
* Persistencia.
* Serialización y deserialización.

La aplicación utiliza un archivo JSON como mecanismo de persistencia local, sin depender de una base de datos ni de paquetes externos.

---

## 1. Objetivo

El objetivo principal es aplicar principios de diseño de software sobre una aplicación funcional sin agregar abstracciones innecesarias.

La arquitectura evita concentrar todas las responsabilidades en `app.js`.

Cada componente tiene una función específica:

```text
app.js
    ↓
Actions
    ↓
Factories
    ↓
Validators
    ↓
Models
    ↓
Store
    ↓
Observers
    ↓
Persistence
```

Esto permite mantener el código organizado, facilitar las modificaciones y reducir el acoplamiento entre componentes.

---

## 2. Tecnologías

* Node.js
* JavaScript
* ES Modules
* `readline/promises`
* Programación Orientada a Objetos
* Principios SOLID
* Patrón Factory
* Patrón Observer
* Persistencia mediante JSON
* Node.js File System (`node:fs`)
* Node.js URL (`node:url`)
* Node.js Path (`node:path`)

No se utilizan dependencias externas.

---

# 3. Estructura del proyecto

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
    ├── config
    │   └── dependencies.js
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
    ├── observers
    │   ├── logger-observer.js
    │   ├── observer.js
    │   └── persistence-observer.js
    │
    ├── persistence
    │   ├── deserializer.js
    │   ├── json-storage.js
    │   ├── persistence-service.js
    │   └── serializer.js
    │
    ├── storage
    │   └── data.json
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

# 4. Responsabilidad de cada componente

## `models`

Contiene las entidades del dominio.

```text
IdentificationType
City
Student
Teacher
Course
Classroom
Topic
CourseSchedule
Inscription
Rate
```

Los modelos representan los datos y las relaciones entre las entidades.

---

## `validators`

Contiene las reglas de validación de cada entidad.

Ejemplo:

```text
Student
    ↓
StudentValidator
```

La validación permanece separada del modelo y de la interfaz de consola.

---

## `factories`

Las factories son responsables de construir las entidades.

El flujo general es:

```text
Action
   ↓
Factory
   ↓
Validator
   ↓
Model
```

Ejemplo:

```text
createStudent()
      ↓
StudentFactory
      ↓
StudentValidator
      ↓
Student
```

Las factories también permiten recibir validadores como dependencias.

---

## `actions`

Cada operación de la aplicación tiene su propia action.

Ejemplos:

```text
create-student.js
create-course.js
create-topic.js
create-rate.js
list-information.js
show-relations.js
```

Las actions coordinan el caso de uso, pero no contienen la definición de los modelos ni las reglas de validación.

---

## `formatters`

Preparan la información para ser mostrada en consola.

```text
Model
   ↓
Formatter
   ↓
Consola
```

Esto mantiene separada la presentación de la lógica del dominio.

---

## `data/store.js`

Mantiene el estado actual de la aplicación en memoria.

El store contiene:

```text
identificationTypes
cities
students
teachers
courses
classrooms
topics
courseSchedules
inscriptions
rates
```

Además, el store implementa el mecanismo de publicación de eventos utilizado por los observers.

```text
Store
  │
  └── notify(event)
          │
          ├── LoggerObserver
          │
          └── PersistenceObserver
```

---

## `observers`

Implementa el patrón Observer.

### `LoggerObserver`

Reacciona a los eventos generados por el store y muestra información del evento:

```text
[EVENT] student.created
```

### `PersistenceObserver`

Reacciona a los eventos y solicita guardar el estado actual:

```text
Store
  ↓
PersistenceObserver
  ↓
PersistenceService
  ↓
data.json
```

Esto permite que el store no tenga que conocer directamente el mecanismo de almacenamiento.

---

## `config/dependencies.js`

Funciona como punto central de composición de dependencias.

Se encarga de:

1. Crear las factories.
2. Crear el servicio de persistencia.
3. Cargar los datos almacenados.
4. Restaurar el store.
5. Crear los observers.
6. Registrar los observers en el store.

El flujo inicial es:

```text
app.js
   ↓
dependencies.js
   ↓
Factories
   ↓
PersistenceService
   ↓
data.json
   ↓
Deserializer
   ↓
Store
   ↓
Observers
```

Esto evita llenar `app.js` con lógica de inicialización.

---

# 5. Persistencia

La aplicación no utiliza un motor de base de datos.

En su lugar utiliza persistencia local mediante:

```text
src/storage/data.json
```

La persistencia está separada en varias responsabilidades.

```text
PersistenceObserver
        ↓
PersistenceService
        ↓
   ┌────┴────┐
   ↓         ↓
Serializer  JsonStorage
   ↓         ↓
   └────┬────┘
        ↓
    data.json
```

Para recuperar los datos:

```text
data.json
    ↓
JsonStorage
    ↓
PersistenceService
    ↓
Deserializer
    ↓
Factories
    ↓
Modelos
    ↓
Store
```

---

# 6. `JsonStorage`

`JsonStorage` se encarga exclusivamente de la interacción con el sistema de archivos.

Responsabilidades:

* Guardar JSON.
* Leer JSON.
* Crear el directorio de almacenamiento si no existe.
* Detectar si el archivo todavía no existe.
* Detectar JSON corrupto.

No conoce las entidades del sistema.

Solo trabaja con datos y una ruta de archivo.

---

# 7. `Serializer`

El serializer convierte las entidades del sistema en datos simples que pueden almacenarse.

Las relaciones no se guardan como objetos completos.

Por ejemplo:

```text
Student
├── identificationType
└── city
```

se convierte conceptualmente en:

```json
{
    "id": 1,
    "identificationTypeId": 1,
    "cityId": 1
}
```

Esto evita duplicar objetos y evita almacenar grafos de objetos innecesariamente complejos.

---

# 8. `Deserializer`

El deserializer realiza el proceso inverso.

```text
JSON
 ↓
Datos simples
 ↓
Factories
 ↓
Modelos
 ↓
Relaciones
```

Utiliza `Map` para resolver las relaciones mediante sus identificadores.

Por ejemplo:

```text
student.cityId
      ↓
cityById
      ↓
City
```

También reconstruye las relaciones inversas:

```text
Course
 ├── topics[]
 └── schedules[]
        └── inscriptions[]
                └── rates[]
```

De esta forma, las relaciones siguen disponibles después de cerrar y volver a iniciar la aplicación.

---

# 9. Relaciones entre entidades

Las relaciones principales son:

```text
Student
├── IdentificationType
└── City

Teacher
└── IdentificationType

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

Las relaciones inversas también se reconstruyen al cargar la información:

```text
Course
├── topics[]
└── schedules[]

CourseSchedule
└── inscriptions[]

Inscription
└── rates[]
```

Cadena completa:

```text
Course
   │
   ├── Topic
   │
   └── CourseSchedule
            │
            └── Inscription
                    │
                    └── Rate
```

---

# 10. Flujo general de creación

Ejemplo: crear un estudiante.

```text
Usuario
   ↓
app.js
   ↓
createStudent()
   ↓
StudentFactory
   ↓
StudentValidator
   ↓
Student
   ↓
store.students
   ↓
store.notify()
   ├── LoggerObserver
   └── PersistenceObserver
              ↓
       PersistenceService
              ↓
          Serializer
              ↓
          JsonStorage
              ↓
          data.json
```

La creación de la entidad y su persistencia permanecen separadas.

---

# 11. Flujo de recuperación

Al iniciar la aplicación:

```text
app.js
   ↓
dependencies.js
   ↓
PersistenceService
   ↓
JsonStorage
   ↓
data.json
   ↓
Deserializer
   ↓
Factories
   ↓
Modelos
   ↓
Reconstrucción de relaciones
   ↓
Store
```

Esto permite cerrar la aplicación y conservar los datos para la siguiente ejecución.

---

# 12. Ruta de almacenamiento

La aplicación obtiene la ruta de `data.json` utilizando la ubicación del módulo:

```js
const dataPath = fileURLToPath(
    new URL("../storage/data.json", import.meta.url)
);
```

Esto evita depender del directorio desde el cual se ejecuta Node.js.

La estructura utilizada es:

```text
src/
├── config/
│   └── dependencies.js
│
├── persistence/
│   └── ...
│
└── storage/
    └── data.json
```

---

# 13. Principios SOLID aplicados

## SRP — Single Responsibility Principle

Cada componente tiene una responsabilidad concreta.

```text
Validator
    → validar

Factory
    → construir

Model
    → representar entidad

Formatter
    → preparar presentación

Action
    → ejecutar caso de uso

Store
    → mantener estado y publicar eventos

Observer
    → reaccionar a eventos

Serializer
    → convertir modelos a datos persistibles

Deserializer
    → reconstruir modelos

JsonStorage
    → interactuar con archivos
```

---

## OCP — Open/Closed Principle

Las operaciones están separadas.

Agregar una nueva operación permite crear una nueva action sin concentrar toda la lógica en `app.js`.

Los observers también permiten agregar nuevos comportamientos ante eventos sin modificar el store para cada nuevo comportamiento.

---

## LSP — Liskov Substitution Principle

Los observers comparten un contrato común:

```text
Observer
    ↓
update()
```

Esto permite que diferentes observers reaccionen a los eventos del store.

---

## ISP — Interface Segregation Principle

JavaScript no utiliza interfaces nativas como otros lenguajes.

En lugar de crear una interfaz enorme, el proyecto mantiene responsabilidades pequeñas y específicas.

---

## DIP — Dependency Inversion Principle

Las factories pueden recibir sus validators como dependencias.

Además, el mecanismo de persistencia está separado:

```text
PersistenceService
        ↓
JsonStorage
```

Esto permite que la lógica de persistencia no esté distribuida por las actions o los modelos.

---

# 14. Requisitos

Se necesita una versión moderna de Node.js con soporte para:

* ES Modules.
* `readline/promises`.

Comprobar la versión:

```bash
node --version
```

No es necesario instalar dependencias externas.

---

# 15. Preparar el proyecto

Desde la raíz del repositorio:

```bash
cd nodejs-engineering-lab/04-notes-management-solid
```

También se puede ejecutar directamente desde la raíz del repositorio.

---

# 16. Ejecutar la aplicación

Desde:

```text
nodejs-engineering-lab/04-notes-management-solid
```

ejecutar:

```bash
node src/app.js
```

También:

```bash
node nodejs-engineering-lab/04-notes-management-solid/src/app.js
```

La ruta de persistencia no depende del directorio actual desde el que se ejecuta Node.js.

---

# 17. Menú principal

La aplicación proporciona las siguientes operaciones:

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

# 18. Orden recomendado

Debido a las relaciones existentes, se recomienda crear las entidades en este orden:

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

Después:

```text
11. Listar información
12. Ver relaciones
```

---

# 19. Listar información

La opción:

```text
11
```

muestra la información almacenada en el `store`.

Los objetos son procesados mediante sus respectivos formatters antes de mostrarse en consola.

Ejemplo:

```text
ESTUDIANTES

{
    id: 1,
    code: 'STU-001',
    firstName: 'Carlos',
    lastName: 'Velasco'
}
```

---

# 20. Ver relaciones

La opción:

```text
12
```

permite comprobar las relaciones entre las entidades.

Ejemplo:

```text
ESTUDIANTES
----------------------------------------
1. Carlos Velasco
   Tipo de identificación: DPI - Documento Personal de Identificación
   Ciudad: GUA - Guatemala
```

También permite consultar relaciones académicas como:

```text
HORARIOS
----------------------------------------
1. NODE-001
   Curso: Node.js Backend
   Profesor: ...
   Aula: ...
```

y:

```text
NOTAS
----------------------------------------
1. Nota: 92
   Estudiante: Carlos Velasco
   Curso: NODE-001
   Comentarios: ...
```

---

# 21. Manejo de errores

Las actions manejan errores mediante `try/catch`.

Ejemplo:

```js
try {

    // operación

} catch (error) {

    console.log("ERROR:", error.message);
}
```

Las reglas de validación pertenecen a los validators.

Por ejemplo:

```text
RateValidator
    ↓
Nota < 0
Nota > 100
```

produce un error de validación sin trasladar esa responsabilidad a `app.js`.

La persistencia también controla situaciones como:

```text
data.json inexistente
data.json corrupto
```

---

# 22. Persistencia y recuperación

La persistencia puede comprobarse mediante el siguiente flujo:

```text
1. Ejecutar la aplicación.
2. Crear una entidad.
3. Salir.
4. Volver a ejecutar la aplicación.
5. Seleccionar "Listar información".
6. Comprobar que la entidad continúa disponible.
```

También deben conservarse las relaciones reconstruibles entre las entidades.

Ejemplo:

```text
Crear:

Course
   ↓
CourseSchedule
   ↓
Inscription
   ↓
Rate

Cerrar aplicación

        ↓

Volver a abrir

        ↓

Restaurar relaciones
```

---

# 23. Resultado

El Review 04 evoluciona el sistema de gestión de notas hacia una arquitectura modular basada en responsabilidades separadas.

La implementación permite:

* Mantener `app.js` enfocado en el menú.
* Separar los casos de uso mediante actions.
* Validar las entidades mediante validators.
* Construir entidades mediante factories.
* Representar el dominio mediante models.
* Separar la presentación mediante formatters.
* Centralizar el estado mediante `store.js`.
* Implementar eventos mediante Observer.
* Registrar eventos mediante `LoggerObserver`.
* Persistir cambios mediante `PersistenceObserver`.
* Serializar entidades antes de almacenarlas.
* Deserializar entidades al iniciar la aplicación.
* Reconstruir relaciones directas e inversas.
* Mantener los datos en `data.json`.
* Evitar dependencias externas.
* Mantener la arquitectura preparada para futuras modificaciones del mecanismo de almacenamiento.

La persistencia actual utiliza JSON como solución local de almacenamiento. Esto permite practicar el ciclo completo:

```text
Modelo
   ↓
Store
   ↓
Evento
   ↓
Observer
   ↓
PersistenceService
   ↓
Serializer
   ↓
JsonStorage
   ↓
data.json
```

y posteriormente:

```text
data.json
   ↓
JsonStorage
   ↓
Deserializer
   ↓
Factories
   ↓
Modelos
   ↓
Relaciones
   ↓
Store
```

La arquitectura mantiene como principio principal **separar responsabilidades sin agregar abstracciones que no aporten una función real**.
