/*For this exercise you will be creating an BankAccount class.
It will have the following properties...

name (e.g., "Joe's main account"), which should be determined by some input
money, which should start out as 0
owner, which contains a AccountOwner object containing the owner's full name, birth date, Id number. Create a class for it too!
pin, which is 4-to-6 digit string.
These field are mandatory to create an account! Put each class in a separate module!

It should have the following methods...

withdraw, which should decrease the amount of money by some input
deposit, which should increase the amount of money by some input
showBalance, which should print the amount of money in the bank to the console.
The BankAccount class has a transactionHistory property which keeps track of the withdrawals and deposits made to the account.

Make sure to indicate whether the transaction increased or decreased the amount of money in the bank account!
The pin code property can be set but it should be never revealed!

if the owner wants to change the pin, the input should be validated - 4-6 long digits.
if the input is invalid it should throw an error with a message "Wrong format!"*/

export class BankAccount {
    firstname;
    money=0;
    pin;
    constructor(firstname, money, pin) {
        this.firstname=firstname;
        this.money=money;
        this.pin=pin;
    }
    get name () {
        return "This is" + "" + this.firstname + "'s" + "" + "main account."
    };
}



