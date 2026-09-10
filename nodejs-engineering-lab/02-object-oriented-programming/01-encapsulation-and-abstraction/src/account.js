export class BankAccount {
  #balance;
  constructor(initialBalance) {

    if (initialBalance >= 0) {
      this.#balance = initialBalance;
    } else {
      throw new Error('Balance inicial inválido');
    }
  }

  get balance() {
    return this.#balance;
  }

  #validateAmount(amount) {
    if (amount >= 1) {
      return true;
    } else {
      throw new Error('Cantidad inválida');
    }
  }

  deposit(amount) {
    this.#validateAmount(amount);
    this.#balance = this.#balance + amount;
  }

  withdraw(amount) {
    this.#validateAmount(amount);
    if (this.#balance >= amount) {
      this.#balance = this.#balance - amount;
    } else {
      throw new Error('Fondos insuficientes');
    }
  }

}