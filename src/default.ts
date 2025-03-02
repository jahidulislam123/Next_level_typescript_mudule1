
function add (num1: number, num2:number=10):number{
    return num1+num2
}


add(2,3)

// Default value always dite hobe amake second peremeter ba er porer gulate , suror tay dile hobe na


// spread operator

const myFriend =[ 'CLSDF', 'DSJFD', 'GADSFSD']
const myNewFriend =[ 'CLSDF', 'DSJFD', 'GADSFSD', 'sdfsdfs' , 'gsdfsd']

myFriend.push(...myNewFriend)
// console.log(myFriend)



// Rest peremeter ke (ala da alada value ke eksathe kore felbe)

// const greetFriends=(friend1:string, friend2:string,friend3:string):void=>console.log(`hi ${friend1}\n Hi ${friend2} Hi ${friend3}`)

// Define the function first
// const greetFriends = (...friend: string[]): void => console.log(friend);
const greetFriends = (...friend: string[]): void => friend.forEach((friend)=>console.log(   `hi ${friend}`))

// Call the function
greetFriends('kasem', 'hasem', 'rahim');




// Ami arekta kaj korte parbo 
