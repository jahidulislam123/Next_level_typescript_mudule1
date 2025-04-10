// map ekta jinish ke arekta jinish e rupanttor kore 

const arrayNumber = [1,23,4];

const arrayOfString = arrayNumber.map((number)=>number.toString());
console.log(arrayOfString);


// type script eo map evabe kaj kore

type Area ={
    height : number;
    width: number;
}

type A = Area['height']   // etar nam hocce look up type

type B = keyof Area;    // widht othoba height hobe 

type AreaString ={
    height: string ;
    width: string;
}

const rectangularArea: Area={

    height: 10,
    width : 12,
}

rectangularArea.width =19;  // ami caile 12 ke 19 kore dite parbo 


type AreaReadOnly = {
   readonly height: number;
   readonly widht: number;
}

const rectangularArea1: AreaReadOnly ={
    height : 10,
    widht: 12,
}

// rectangularArea1.height=32   // tarmane readonly property er moddhe ami change korte parbo na 



// sob gula kaj eksathe korar jonno map korbo 


type Area2 ={

    [key in 'Height'| 'Width']: number;   // hover korlei dekha jat etar mane ki ninish
}


type Volume ={
    height: number;
    width : number;
    depth: number ;
}

// ei jinish take keyof er maddhome korte parbo easily

type volume1 ={
    [key in keyof Volume]: string;
}

// map typer sahajje number type ke string kore felcei
// tarmane typesrcipt e man mane hocce key in keyof 



// generic kori amra normally dynamic korar jonno 
// mane type gulake amra dynamic vabe pathanot jonno 


type Area5<T> ={
    [index in  keyof T]: T[index];
}

const area5 : Area5<{height: number , widht: number}>= {
    height: 10,
    widht: 12,
}