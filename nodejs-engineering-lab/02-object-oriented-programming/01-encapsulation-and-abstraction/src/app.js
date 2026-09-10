import { User } from './user.js';
import { BankAccount } from './account.js';

console.log('--- PROBANDO USUARIO ---');
try {
  const miUsuario = new User("carlos", "carlos@example.com", "123456");
  console.log("Usuario creado:", miUsuario.username);
  
  // Prueba un setter válido
  miUsuario.email = "nuevo@email.com";
  
  // Prueba el validador de contraseña
  console.log("¿Pass correcta?", miUsuario.validatePassword("123456")); // Debería ser true
  console.log("¿Pass correcta?", miUsuario.validatePassword("passwordMalo")); // Debería ser false

  // Descomenta esto para ver si la validación funciona (debería fallar el programa)
  // miUsuario.username = "ab"; 

} catch (error) {
  console.error("Error en usuario:", error.message);
}

console.log('\n--- PROBANDO CUENTA BANCARIA ---');
try {
  const miCuenta = new BankAccount(1000);
  console.log("Saldo inicial:", miCuenta.balance);

  miCuenta.deposit(500);
  console.log("Saldo después de depósito:", miCuenta.balance);

  miCuenta.withdraw(200);
  console.log("Saldo después de retiro:", miCuenta.balance); 

  // Descomenta esto para probar si la sistema evita fraudes
  // miCuenta.withdraw(5000); // Debería dar error por fondos insuficientes

} catch (error) {
  console.error("Error en cuenta:", error.message);
}