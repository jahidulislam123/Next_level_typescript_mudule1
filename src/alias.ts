
type crushType= {
     name: string,
    age?:number,
    proffesiona:string,
    address:string

}

const crush1:crushType= {
    name: 'moynapakhi',
    age:22,
    proffesiona:"WebDeveloper",
    address:"uganda"
};

const crush2:crushType={
    name: 'Tia Pakhi',
    
    proffesiona:"Next level webdeveloper ",
    address:"Mexico"
};


type inCrushtype= boolean;

const isHeMarried : inCrushtype=false;




//function er khetreo allias use korte pari 

// const calculate =(number1:number, number2: number, operation: (x:number,y:number)=>number )=>{
//     return operation(number1,number2);

// }

// calculate(10,20,(x,y)=>x+y)

// calculate(10,20,(x,y)=>(x-y))
// calculate(10,20,(x,y)=>(x*y))
// calculate(10,20,(x,y)=>(x/y))




// oporer jinish take ami jevabe korbo 

//function er khetreo allias use korte pari 

type operationType= (x:number,y:number)=>number ;

const calculate =(
    number1:number, 
    number2: number,
    operation:operationType,
 ) =>{
    return operation(number1,number2);

}

calculate(10,20,(x,y)=>x+y)

calculate(10,20,(x,y)=>(x-y))
calculate(10,20,(x,y)=>(x*y))
calculate(10,20,(x,y)=>(x/y))