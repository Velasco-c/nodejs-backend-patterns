console.log(`Versión de Node.js: ${process.version}`);
console.log(`Plataforma del SO: ${process.platform}`);
console.log(`ID del Proceso (PID): ${process.pid}`);

const userArgument = process.argv.find(arg => arg.startsWith('--user='));

let username;

if (userArgument) {
    username = userArgument.split('=')[1];
} else {
    username = process.env.USER || process.env.USERNAME || 'Usuario Anónimo';
}
console.log(`Usuario: ${username}`);