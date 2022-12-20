<!-- @format -->

# TypeScript-project02_ATM

## TS Project 02 – ATM:

### Description:

This somewhat complex TypeScript/Node.js project is a console-based application.
When the system starts the user is prompted with a user id and user pin. After
entering the details successfully, the ATM functionalities are unlocked. All the
user data is generated randomly.

### What we know from the description:

1. Console based
2. prompted with user Id and Pin when app starts
3. User need to enter detail
4. After successfully adding details ATM Functionality unlocked
5. All the data is generated randomly

### Basic Featues:

<ol>
    <li>Balance Inquiry</li>
    <li>Transfer Amount</li>
    <li> Withdraw Amount</li>
</ol>

### Project / ATM App Flow:

<ol>
    <li>Welcome message.</li>
    <li>computer generates user id and user pin.</li>
    <li>Chack against the record.</li>
    <li>Computers generate banalace in account.</li>
    <li>App ask user to pick the function he/she need to perform:
        <ol>
            <li>Balance Inquiry</li>
            <li>Transfer Amount</li>
            <li>Withdraw Amount</li>
        </ol>
    </li>
    <li>if user picks the balance inquiry then computer show the balance</li>
    <li>if user picks the Transfer Amount then :
        <ol>
            <li>computer ask the user to enter the account number </li>
            <li>Check whether its correct format or not</li>
            <li>if account number is correct ask user to enter amount</li>
            <li>check the balance is sufficnt or not ?</li>
            <li>if sufficent then amount user enters deducted from balance </li>
            <li>if not sufficent then message will appares that your balnace is too low to perform this action</li>
        </ol>
    </li>
    <li>if user pick to withdraw amount then
        <ol>
            <li>ask user to enter amount</li>
            <li>check the balance is sufficnt or not ?</li>
            <li>if sufficent then amount user enters deducted from balance </li>
            <li>if not sufficent then message will appares that your balnace is too low to perform this action</li>
        </ol>
    </li>
    <li>Computer will ask your to perform another operation 
    <ol> 
        <li>if yes then go back to step 5</li>
        <li>else exit the program with message of "Thank you for using RRS-ATM"</li>    
    </ol>
    </li>
</ol>
