class Account {
    constructor(accountNumber,accountHolder,balance) {
        this.accountNumber = accountNumber    
        this.accountHolder = accountHolder    
        this.balance = balance    
    }
    checkBalance(){
        return `the current ${this.balance}` 
    }

    deposit(amount){
        console.log( `your accout has been credited ${amount} Total balance ${amount + this.balance}`);
         
    }

    withdraw(amount){
        if (amount<this.balance) {
            console.log(`You withdraw ${amount} Total balance ${this.balance - amount}` );
             
        }
        else{
            console.log( `You don't have amout to withdraw` );
            
        }
       
    }
}

let a = new Account(7567035621,"chirag",100000)

console.log(a);

console.log(a.checkBalance());

console.log(a.deposit(10000));

console.log(a.withdraw(100));


class ATM extends Account{
    constructor(accountNumber,accountHolder,balance) {
        super(accountNumber,accountHolder,balance)
    }

    displayOptions(){
        console.log("You Want To checkBalance than click 1");
        console.log("You Want To deposit than click 2");
        console.log("You Want To withdraw than click 3");
    }

    performOperation(operation, amount){
        if(operation == 1)
        {
            a.checkBalance()   
        }
        if(operation == 2)
        {
            a.deposit(amount)
        }
        if(operation == 3)
        {
            a.withdraw(amount)
        }
    }
}

let dc = new ATM(7567035621,"chirag",100000);

console.log(dc);

dc.displayOptions();

dc.performOperation(2,20000)


