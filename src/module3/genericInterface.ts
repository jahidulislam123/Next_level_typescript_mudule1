// generic interface toiri korbo
// generic mane hocce jeta pathabo seta grohon korbe


interface CrushInterface<T, U =null> {
    name: string,
    husband:T
}


const crush11 : CrushInterface<boolean>={name: "kate", husband: true}

const crush123 : CrushInterface<string>={name: 'pagla', husband: "rahim"}

interface husbandInterface{
    name: string,
    salary : number,
}

const crush32 :CrushInterface<husbandInterface> ={
    name: 'ronti',
    husband: {
        name:'bonti',
        salary: 9394,
    }
}

interface CrushInterface<T,U=null> {
    name: string;
    husband: T;
    wife?:U;
}


// const crush111 : CrushInterface<object,object>={
//     name: 'kate',
//     husband: 'Persian',
//     Wife:{
//         name: 'bokkor',
//         age: 40
//     }
// }