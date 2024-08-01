const withdraw = (person, amount) => {
    if (amount > person.balance) {
        console.log("Withdraw cannot be processed due to insufficient funds.");
    } else {
        person.balance -= amount;
        console.log(`Withdraw is successful. Your new balance is: ${person.balance}`);
    }
};

const person = {
    
    balance: 2000
};

withdraw(person, 9000);
withdraw(person, 100);

