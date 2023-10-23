// Definindo uma classe para representar uma conta bancária
class ContaBancaria {
  constructor(numeroConta, saldoInicial, tipoConta, agencia) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.tipoConta = tipoConta;
    this.agencia = agencia;
  }

  // Método para consultar o saldo
  consultarSaldo() {
    return `Saldo da Conta ${this.numeroConta}: R$ ${this.saldo.toFixed(2)}`;
  }

  // Método para depositar dinheiro na conta
  depositar(valor) {
    this.saldo += valor;
    return `Depósito de R$ ${valor.toFixed(2)} realizado na Conta ${this.numeroConta}. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
  }

  // Método para sacar dinheiro da conta
  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return `Saque de R$ ${valor.toFixed(2)} realizado na Conta ${this.numeroConta}. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
    } else {
      return `Saldo insuficiente para o saque na Conta ${this.numeroConta}`;
    }
  }
}

// Criando instâncias de contas bancárias
const conta1 = new ContaBancaria(1001, 1000.0, "Corrente", "Agência A");
const conta2 = new ContaBancaria(1002, 500.0, "Poupança", "Agência B");

// Exemplos de utilização
console.log(conta1.consultarSaldo()); // Consultar saldo da conta1
console.log(conta2.consultarSaldo()); // Consultar saldo da conta2

console.log(conta1.depositar(500.0)); // Depositar na conta1
console.log(conta2.sacar(200.0));    // Sacar da conta2

console.log(conta1.consultarSaldo()); // Consultar saldo atualizado da conta1
console.log(conta2.consultarSaldo()); // Consultar saldo atualizado da conta2
