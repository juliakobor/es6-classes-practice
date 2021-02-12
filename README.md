# Make a BankAccount Class

For this exercise you will be creating an `BankAccount` class.

It will have the following properties...
* `name` (e.g., "Joe's main account"), which should be determined by some input
* `money`, which should start out as `0`
* `owner`, which conains a AccountOwner object containing the owner's full name, birth date, Id number. Create a class for it too!
* `pin`, which is 4-to-6 digit long string property and also private  

These field are mandatory to create an account!
Put each class in a separate module!

It should have the following methods...
* `withdraw`, which should decrease the amount of money by some input
* `deposit`, which should increase the amount of money by some input
* `showBalance`, which should print the amount of money in the bank to the console.

The `BankAccount` class has a `transactionHistory` property which keeps track of the withdrawals and deposits made to the account.
* Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.

The pin code property can be set but it should be never revealed!
- if the owner wants to change the pin, the input should be validated (4-6 long digit string)! Use a setter!
- if the format was wring it should throw an error with a message "Wrong PIN!"
 
#### Bonus

Give the `Atm` class a `backupAccount` property that can, optionally, contain a reference to another instance of the class, determined by some input
* Whenever an ATM's balance goes below zero, it will remove money from the instance stored in `backupAccount` so that its balance goes back to zero.
* This should trigger a withdrawal in the back up account equal to the amount of money that was withdrawn from the original account.

#### Bonus 2
- the user has 3 attempts to set the PIN code, else the BankAccount locks down and no transactions can be made! 
