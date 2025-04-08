// arrow function
// generic mane hocce jeta pathabo seta grohon korbe 
const createArray=(param: string): string[]=>{

    return[param];

}

const result =createArray("bangladesh")



// uporere jinishtake ami ekhan generic er maddhodhe korbo 

const createArray1=<T>(param: T): T[]=>{

    return[param];

}

const result1 =createArray1<string>("bangladesh")

const result2 =createArray1<boolean> (false);
type Name= {
    name: string;
}
const result3 =createArray1<Name> ({name: 'bangladesh'});


// 2 ta generic niye kaj korbo 

const createArray2=<X,Y>(param: X, param2: Y): [X,Y]=>{

    return[param, param2];

}

const result11 =createArray2<string,string>("bangladesh","INDIA");



//spread operator e onk valo generic use kora jay

const crush =' kate willamson';
const myinfo ={

    name: "Persian",
    age: 100,
    salary : 12345,
}
const  newData={...myinfo, crush}
// ei jinish ta ekhn function er maddhome korbo 


const createMeIntoMyCrush =<T>(myinfo: T)=>{
    const crush11 = "lolita";
    const newData = {...myinfo, crush};
    return newData;
}



const result5 = createMeIntoMyCrush(myinfo)