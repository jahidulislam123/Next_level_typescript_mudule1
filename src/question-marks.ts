// ternarry operator 

const age : number = 22;

if(age>18){
    console.log("yes")
}else{
    console.log("No")
}


const isAdult=age>=18? 'Yes': 'No';
console.log(isAdult)

// Nullish coalescing operator 
// Null and undefined

const isAuthenticationUser = null
const userName = isAuthenticationUser ?? 'Guest'
console.log(userName)


type Manush ={
    name: string;
    age: number;
    address:{
        city:'No City';
        road: 'No Road';
        Home?:'';
    }
}

// const Manush1: Manush={
//     name: 'manush',
//     age: 100,
//     address:{
//         city : 'No City',
//         road: "NO ROAD",
//     }
// }