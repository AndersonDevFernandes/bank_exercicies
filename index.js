class Register{
  constructor(account, balance, accountType, agency){
    this.account = account
    this.balance = balance
    this.accountType = accountType 
    this.agency = agency
  }
}

let agency = [101, 102, 103]
let accountType = ["Checking Account", "Saving Account", "Money Market Account", "Investment Account"]
let fname = ["Anderson", "Sol", "Aquiles"]

let account = window.prompt('Number Account: ')
let balance = parseFloat(prompt("Actual Balance: "))
let option =""




do {
 option = (
  "balance available: US$ " + balance + 
  "\n1 - Deposit" +
  "\n2 - Witdraw" +  //saque
  "\n3 - Exit"
 )

switch(option){
  case "1":
    balance += parseFloat(prompt("Deposit Amount")) //valor do deposito
    break
  case "2":
    balance -= prompt("Withdrawal made") //Saque realizado
    break
  case "3":
    alert( `Agency ${agency [0]}.\nAccount Number: ${account}\nAccount Type ${accountType[0]}.\nThank you ${fname[0]} your balance is ${balance}. \n`)
    break
  default:
    alert("Error")    
  }
} while (option !=="3")



// loguin

function login(event) {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
    const modal = document.getElementById('modal')
    modal.classList.add('abrir')
  
    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar' || e.target.id == 'modal'){
        modal.classList.remove('abrir')
      }
    })
      
  } else {
      alert("User or password invalid.");
  }
}


// modal

function modal(){
  const modal = document.getElementById('modal')
  modal.classList.add('abrir')

  modal.addEventListener('click', (e) => {
    if(e.target.id == 'fechar' || e.target.id == 'modal'){
      modal.classList.remove('abrir')
    }
  })
}

