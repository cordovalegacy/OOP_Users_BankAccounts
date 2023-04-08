class BankAccount{
    constructor(intRate, balance){
        this.intRate = intRate
        this.balance = balance
    }
}

class User{
    constructor(name, email, checkingInterest, checkingAmount, savingsInterest, savingsAmount){
        this.name = name
        this.email = email
        this.checking = new BankAccount(checkingInterest, checkingAmount)
        this.savings = new BankAccount(savingsInterest, savingsAmount)
    }

    depositMoney(amount, type){
        this[type].balance += amount
        return this
    }

    withdrawMoney(amount, type){
        this[type].balance -= amount
        return this
    }

    displayAccountInfo(){
        console.log(`Account Holder: ${this.name} - ${this.email} \nChecking Balance: $${this.checking.balance} - Interest Rate: ${this.checking.intRate} \nSavings Balance: $${this.savings.balance} - Interest Rate: ${this.savings.intRate} `)
    }
}


customer1 = new User("Brendan", "cordovalegacy19@gmail.com", 0.25, 1000, 0.1, 4500)
customer1.withdrawMoney(900, "savings").depositMoney(1400, "checking").displayAccountInfo()