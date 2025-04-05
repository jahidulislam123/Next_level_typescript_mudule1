// Eta type alias er moto interface ekta chomotkar jinish


type User ={

    name: string;
    age: number;

    
}

// uporere jinish ta arek vabe prokash korte pare setake interface bole

interface IUser {
    name: string;
    age: number;
}

// object er khetre sodu matro interface use korbo 

const userWithTypeAlias : User={
    name: 'Type Alias',
    age: 100
}

const userWithInterface : IUser ={
    name : 'Interface',
    age : 200
}


// Interface er ekta subidha holo etake caile extend korte pari 

// jemon ekta udaharon

interface extendedUser extends IUser{
    role: string;
}

const user2 : extendedUser={
    name : " Omanush",
    age: 20000, 
    role : "unknown"
}


// type alias er maddhomeo korte pari sekhetre interface and union er maddhome korte hobe 

// type extendedUser = User & {
//     role: string
// }


// INterface sudho matro object er jonno (function er khetreo , array er khetreo , object er khetreo)

type addNumbersTypes=(num1 : number , num2: number)=>number
const addNumbers : addNumbersTypes =(num1  , number2): number => num1+number2;


// Ekhni ei jinishtar interface er maddhome korte pari 

interface IaddNumbers {
    (num1: number , num2 : number): number;
}


// amara always type alias use korbo 


// array keo kaje lagabo 

// const rollNumbers : number[] =[1,2,4,5];

// Ei jinishtake explicit vabe korte pari


type rollNumbersType = number[];

// ekhon ei type alias ta interface er maddhome korte pari 

interface IRollNumbers {
    [index: number]:number
}
const rollNumbers : rollNumbersType =[1,2,4,5];

