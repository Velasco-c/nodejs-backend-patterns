# Ejercicio 2: ESM y Gestión de Dependencias

## Objetivo
Implementar el estándar ECMAScript Modules (ESM) de forma nativa en Node.js y utilizar librerías externas para la transformación funcional de datos.

## Archivos Clave
* `package.json`: Configurado con `"type": "module"` para habilitar la sintaxis de importación moderna.
* `src/data-processor.js`: Script principal que procesa un conjunto de datos en memoria utilizando métodos de `lodash`.

## Instrucciones de Ejecución

1. Navega al directorio del ejercicio:
```bash
cd nodejs-engineering-lab/01-foundations-and-runtime/02-esm-and-dependencies
```

2. Instala las dependencias del proyecto:
```bash
npm install
```


3. Ejecuta el procesador de datos:
```bash
node src/data-processor.js
```




---

**Análisis Técnico de las Salidas Esperadas**

**`02-esm-and-dependencies`**
La ejecución de este módulo valida la correcta resolución de dependencias utilizando el estándar moderno de importaciones (`import/export` en lugar de `require`). 
* La salida en consola confirmará una operación de reducción y agrupación de datos (*Data Wrangling*). 
* Se observará un objeto JSON segmentado por las claves categóricas de rol (`desarrollador` y `tester`). 
* Los objetos internos demostrarán que la colección fue pre-filtrada correctamente de manera funcional, omitiendo silenciosamente el objeto correspondiente a "Carlos" (edad 16), comprobando la eficacia de componer métodos de validación (`_.filter`) y agregación (`_.groupBy`) para sanitizar y estructurar *payloads* de datos.
