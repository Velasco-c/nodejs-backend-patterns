# Refuerzo 02 — Encapsulamiento y Abstracción

## Objetivo

Implementar un pequeño sistema de usuarios y cuentas bancarias utilizando Programación Orientada a Objetos (POO) en JavaScript.

El ejercicio tiene como propósito aplicar los conceptos de:

* clases
* objetos
* constructores
* instanciación
* propiedades privadas
* métodos privados
* getters
* setters
* encapsulamiento
* abstracción
* validación
* uso de `this`

---

## Estructura

```text
01-encapsulation-and-abstraction
├── README.md
└── src
    ├── account.js
    ├── app.js
    └── user.js
```

### `src/user.js`

Contiene la clase `User`, responsable de representar a un usuario.

La clase utiliza propiedades privadas:

```js
#username
#email
#password
```

El acceso a `username` y `email` se realiza mediante getters.

Las modificaciones se realizan mediante setters, donde se aplican las reglas de validación correspondientes.

La contraseña permanece encapsulada y no se expone mediante un getter.

También se implementa:

```js
validatePassword()
```

para comprobar una contraseña sin exponer directamente el valor almacenado.

---

### `src/account.js`

Contiene la clase `BankAccount`, responsable de representar una cuenta bancaria.

El saldo se almacena mediante una propiedad privada:

```js
#balance
```

El saldo solamente puede consultarse mediante el getter:

```js
balance
```

Las operaciones disponibles son:

```js
deposit()
withdraw()
```

La validación de los montos se realiza mediante el método privado:

```js
#validateAmount()
```

Además, `withdraw()` comprueba que existan fondos suficientes antes de realizar el retiro.

---

### `src/app.js`

Es el punto de entrada y demostración del ejercicio.

Se utiliza para crear instancias de:

```js
User
BankAccount
```

y comprobar el comportamiento de las clases.

Las pruebas incluyen:

* creación de usuarios
* consulta de información mediante getters
* modificación mediante setters
* validación de contraseñas
* creación de cuentas
* consulta de saldo
* depósitos
* retiros
* control de fondos insuficientes

---

## Encapsulamiento

El encapsulamiento consiste en proteger el estado interno de un objeto y controlar la manera en que otras partes del programa pueden acceder o modificarlo.

En este ejercicio se utilizan campos privados de JavaScript:

```js
#username
#email
#password
#balance
```

Por ejemplo, el saldo no puede modificarse directamente desde fuera de `BankAccount`.

En lugar de permitir modificar directamente el estado interno, la clase proporciona operaciones controladas:

```js
account.deposit(500);
account.withdraw(200);
```

Esto permite que la propia clase controle las reglas de modificación.

---

## Getters

Los getters permiten consultar información del objeto mediante una interfaz controlada.

Ejemplo:

```js
user.username;
user.email;
account.balance;
```

La contraseña no dispone de getter porque no debe exponerse directamente.

---

## Setters

Los setters permiten modificar determinadas propiedades aplicando validaciones.

### Username

Debe:

* ser de tipo `string`
* tener como mínimo 3 caracteres

### Email

Debe:

* ser de tipo `string`
* contener `@`

### Password

Debe:

* ser de tipo `string`
* tener como mínimo 6 caracteres

De esta manera, la clase evita almacenar directamente determinados valores inválidos.

---

## Constructor y setters

El constructor de `User` utiliza los setters para inicializar las propiedades:

```js
constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
```

Esto permite reutilizar las validaciones existentes en los setters sin duplicar la lógica dentro del constructor.

El flujo de inicialización es:

```text
new User(...)
      │
      ▼
constructor
      │
      ├── this.username = username
      │         │
      │         ▼
      │      setter
      │         │
      │      validación
      │
      ├── this.email = email
      │         │
      │         ▼
      │      setter
      │         │
      │      validación
      │
      └── this.password = password
                │
                ▼
             setter
                │
             validación
```

Esto evita mantener dos implementaciones diferentes de la misma regla de validación.

---

## Métodos privados

`BankAccount` utiliza:

```js
#validateAmount()
```

Este método solamente puede ser utilizado internamente por la clase.

Su responsabilidad es comprobar que el monto utilizado en una operación sea válido.

El código externo utiliza únicamente:

```js
deposit()
withdraw()
```

Esto es una aplicación de encapsulamiento y abstracción.

---

## Abstracción

La abstracción permite utilizar una funcionalidad sin necesitar conocer todos los detalles de su implementación interna.

Por ejemplo:

```js
account.deposit(500);
```

Desde `app.js` no es necesario conocer cómo se modifica internamente:

```js
#balance
```

La clase se encarga de:

1. validar el monto
2. realizar la operación
3. actualizar el saldo

El consumidor solamente utiliza la interfaz pública.

```text
Aplicación
    │
    │ deposit(500)
    ▼
BankAccount
    │
    ├── #validateAmount()
    │
    └── #balance
```

---

## Validaciones

El ejercicio utiliza validaciones para evitar estados incorrectos.

### `User`

```text
username → mínimo 3 caracteres
email    → debe contener @
password → mínimo 6 caracteres
```

### `BankAccount`

```text
saldo inicial → no puede ser negativo
monto         → debe ser mayor o igual a 1
retiro        → no puede superar el saldo disponible
```

Cuando una validación falla, se genera un `Error`.

---

## Conceptos aplicados

| Concepto        | Implementación                                  |
| --------------- | ----------------------------------------------- |
| Clase           | `User`, `BankAccount`                           |
| Objeto          | Instancias creadas con `new`                    |
| Constructor     | Inicialización de las instancias                |
| `this`          | Acceso al estado de la instancia                |
| Campo privado   | `#username`, `#email`, `#password`, `#balance`  |
| Getter          | `username`, `email`, `balance`                  |
| Setter          | `username`, `email`, `password`                 |
| Método público  | `validatePassword()`, `deposit()`, `withdraw()` |
| Método privado  | `#validateAmount()`                             |
| Encapsulamiento | Protección del estado interno                   |
| Abstracción     | Uso de una interfaz pública                     |
| Validación      | Setters y métodos de las clases                 |

---

## Ejecución

Desde la raíz del proyecto:

```bash
node nodejs-engineering-lab/02-object-oriented-programming/01-encapsulation-and-abstraction/src/app.js
```

También se puede ejecutar entrando directamente al directorio del ejercicio:

```bash
cd nodejs-engineering-lab/02-object-oriented-programming/01-encapsulation-and-abstraction
node src/app.js
```

---

## Resultado esperado

La ejecución debe demostrar que:

* se puede crear correctamente un usuario
* se puede consultar su username y email
* los setters permiten modificar información válida
* los setters rechazan información inválida
* `validatePassword()` identifica contraseñas correctas e incorrectas
* se puede crear una cuenta bancaria
* se puede consultar el saldo
* se pueden realizar depósitos válidos
* se pueden realizar retiros válidos
* no se pueden realizar retiros superiores al saldo disponible
* los campos privados no se pueden manipular directamente

---

## Restricciones

No se deben reemplazar los campos privados por propiedades públicas o por convenciones como:

```js
_username
_email
_password
_balance
```

El ejercicio debe utilizar la sintaxis de campos privados de JavaScript:

```js
#username
#email
#password
#balance
```

La contraseña no debe exponerse mediante un getter.

Las operaciones de la cuenta deben realizarse mediante los métodos públicos definidos por `BankAccount`.

---

## Referencia de la clase

Ejercicio desarrollado a partir del contenido de Programación Orientada a Objetos correspondiente al commit:

```text
d695e1ec55683e861e151f5658b66b3590f29688
```

Repositorio:

```text
https://github.com/Velasco-c/Apuntes-personal
```

El ejercicio transforma los conceptos vistos en clase en una implementación práctica independiente, con énfasis en encapsulamiento, abstracción y validación del estado de los objetos.
