// generic mane hocce kono kicuke generalized kora 

// ekta simple exmaple

const rollNumber1 : number[] = [22,3 ,44];
const rollNumber2 : string[]= [ "32","45","2"];

// Ei 2 ta jinish ke amra onno vabeo likhte parei 
const rollNumber3 : Array<number> =[54,66,43];
const rollNumber5 : Array<string> =['af', '45', 're']
const roll : Array<boolean> = [true,false];
const userNameAndRollNumber: Array <{name: string , roll: number}>=[{
    name: "mr, x",
    roll : 1

},{
    name: 'mr, y',
    roll: 4,
}

]


// uporere jinish gula bar bar type declare na kore ami caile ekta generic type e korte pari 
// generic array er kaj hocce jokhon  jei value ta asbe tokhon sei value take nibe 

type GenericArray<T> = Array <T>

const rollNumber31 : GenericArray<number> =[54,66,43];
const rollNumber51 : GenericArray<string> =['af', '45', 're']
const roll11 : GenericArray<boolean> = [true,false];

// Same jinish evabe korte pari 

type NameRollType ={name: string , roll: number}
const userNameAndRollNumber2: GenericArray <NameRollType>=[{
    name: "mr, x",
    roll : 1

},{
    name: 'mr, y',
    roll: 4,
}

]



// amra caile eker odhik generic type bosate pari topple er moto 

type GenericTupple<X,Y> =[X,Y];

const relation: GenericTupple <string, string> =['Persia', 'KateWinslet']

const relationWithSalary : GenericTupple<object,string>=[{
    name: 'persioa',
    salary: 3444444,
},
"kate Winslet"
]

// Eta best practice na 

const relationWithSalary2 : GenericTupple<{name: string, salary: number},string>=[{
    name: 'persioa',
    salary: 3444444,
},
"kate Winslet"
]