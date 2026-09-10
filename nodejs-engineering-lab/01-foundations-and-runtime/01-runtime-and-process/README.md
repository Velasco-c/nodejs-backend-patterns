# Ejercicio 1: Runtime & Process (Inspección del Entorno)

## Objetivo
Comprender y utilizar el objeto global `process` de Node.js para extraer información del entorno de ejecución, identificar el sistema operativo subyacente y capturar argumentos enviados a través de la interfaz de línea de comandos (CLI).

## Archivos Clave
* `src/env-inspector.js`: Script principal que evalúa el estado del proceso.

## Instrucciones de Ejecución

1. Navega al directorio del ejercicio:
```bash
cd 01-foundations-and-runtime/01-runtime-and-process
```

2. Ejecuta el script sin argumentos (utilizará el usuario del sistema):
```bash
node src/env-inspector.js
```

3. Ejecuta el script con un argumento personalizado:
```bash
node src/env-inspector.js --user=DevUser
```

---

**Análisis Técnico de las Salidas Esperadas**

**`01-runtime-and-process`**
La salida de este script demuestra la capacidad de Node.js para actuar como puente entre la aplicación y el sistema operativo. 
* Los primeros tres registros (`process.version`, `process.platform`, `process.pid`) garantizan la trazabilidad del entorno, lo cual es crítico en auditorías de infraestructura y telemetría de servidores. 
* El comportamiento del `username` valida el control de flujo basado en la entrada del usuario: si se detecta un *flag* específico en el vector de argumentos (`process.argv`), este sobrescribe la configuración por defecto, demostrando el patrón básico para la construcción de herramientas CLI personalizadas. Si se omite, el sistema realiza un *fallback* seguro leyendo la variable de entorno `USER` del sistema anfitrión.