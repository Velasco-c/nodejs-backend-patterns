import _ from 'lodash';

function procesarDatos(datos) {
  const usuariosValidos = _.filter(datos, usuario => usuario.edad >= 18);
  const datosAgrupados = _.groupBy(usuariosValidos, 'rol');
  return datosAgrupados;
}

const listaUsuarios = [
  { id: 1, nombre: 'Ana', edad: 25, rol: 'desarrollador' },
  { id: 2, nombre: 'Carlos', edad: 16, rol: 'diseñador' },
  { id: 3, nombre: 'Marta', edad: 30, rol: 'desarrollador' },
  { id: 4, nombre: 'Luis', edad: 22, rol: 'tester' },
  { id: 5, nombre: 'Pedro', edad: 28, rol: 'tester' }
];

const resultado = procesarDatos(listaUsuarios);
console.log("Usuarios agrupados por rol (solo mayores de edad):");
console.log(resultado);