// syncronus hocce ektar por arekta aseb
//asyncronus hocce jeta icca seta aste parbe .. mane majkhane kono block er jonno oder asa khoti grosto hobe na 


// mocking mane amr tw ekhane database nai amake normally ekta database banay nilam 

const makePromise=(): Promise<string>=>{
return new Promise<string>((resolve, reject)=>{
    const data: string ="data is fetched";
    if(data){
        resolve(data)
    }else{
        reject('Failed to fetch data')
    }
})
}

const getPropertiesData2= async():Promise<string>=>{

    const data = await makePromise();
    return data;
}


// Eta ekhno bollean er promise korteci 

const makePromiseBollean=(): Promise<boolean>=>{
return new Promise<boolean>((resolve, reject)=>{
    const data: boolean =false;
    if(data){
        resolve(data)
    }else{
        reject('Failed to fetch data')
    }
})
}


const getPropertiesData1= async (): Promise<boolean>=>{
    const data = await makePromiseBollean();
    return data;
}

// void mane ami kono kicu return kortecina 

// const getPropertiesData= async (): Promise<string>=>{
//     const data = await makePromise();
// }


// Promise<string) Promise<boolean> Promise<number>


// object ke dekhbo amra 

type dataType ={
    name: string;
}

const makePromiseObject=(): Promise<dataType>=>{
return new Promise<dataType>((resolve, reject)=>{
    const data: dataType ={
        name: 'JAHIDUL iSLAM'
    }
    if(data){
        resolve(data)
    }else{
        reject('Failed to fetch data')
    }
})
}


const getPropertiesData11= async (): Promise<object>=>{
    const data = await makePromiseObject();
    return data;
}


// tarmane promise string er maddhome hoye, array er maddhome e hoy hoy , string er maddhomeo hoy , object er maddhome meo hoy




// Ekhon json place holder diye data take fetch kore dekhabo 
interface Itodo {
    
  userId: number;
  id: number;
  title: string;
  completed: boolean;

}

const getTodo = async(): Promise<Itodo>=>{
   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
     return await response.json()
    
}


const getTodoData = async(): Promise<void>=>{
    const result =await getTodo();
    console.log(result);
}
getTodo();
