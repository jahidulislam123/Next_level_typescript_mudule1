// assertion mane ami type script theke beshi buji
// assertion mane buja 

//example

let emni: any;

emni = "Next Level Web Development";

//emni. amake kicu suggest kore na karon ami upore any type diye dici 

// kintw ami sure je eta string type so ami jani 

//(emni as string). ekhn dot dile string er jei method gula ace sobgula ami use korte parbo 

(emni as string).length;
<string>emni.length;   // evabeo likha jay 



let jahid : any;

jahid = 222;

// (jahid as number). ekhane ami dot dile number er jotogula properties ace ami segulake use korte pari 

(jahid as number)


//  function diye korbo 

function kgToGram (param : string| number):string|number| undefined{
    if(typeof param === 'string'){
        const value = parseFloat(param)
        return ` The converted result is : ${value} gram`
    }
    if(typeof param === 'number'){
        const value = param*1000;
        return value;
    }
}


const resultToBeNumber =kgToGram(1000) as number;

const resultToBeString =kgToGram('jahidul') as string;


type CustomErrorType={
    message:string;
}

try{

}catch(err){
    console.log((err as CustomErrorType).message)
}