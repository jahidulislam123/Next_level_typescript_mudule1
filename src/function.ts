// Amra 2 dhoroner function use kori 
// normal functiona and arrow functiona


function add1 (num1: number, num2:number):number{
    return num1+num2
}


add1(2,3)




// Array functiona: 


const addArrow =(num1:number,  num3:number):number=> num1+num3;

// Callback function
const arr =[1,2,3,4]

const newArray   = arr.map((elemetn:number)=>elemetn*elemetn);



// Amara caile object er moddhe ei functiona gula use korte pari 

// function e object e use korle setake bole method bole

const person: {
    name: string;
    balance: number;
    addBalance: (money: number) => string; // Corrected method name
} = {
    name: "mejba",
    balance: 5,
    addBalance(money: number) { // Method name corrected
        return `My new balance is ${this.balance + money}`; // Added return statement
    }
};

// console.log(person.addBalance(10)); // Example usage



// Ekhn more korlam ami return korbo na 



const person1: {
    name: string;
    balance: number;
    addBalance: (money: number) => void; // Corrected method name
} = {
    name: "mejba",
    balance: 5,
    addBalance(money: number) { // Method name corrected
        console.log( `My new balance is ${this.balance + money}`); // Added return statement
    }
};