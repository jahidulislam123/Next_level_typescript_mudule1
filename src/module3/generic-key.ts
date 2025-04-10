type PersonType={
    name: string;
    age: number;
    address:string;
}

type newType ='name'|'age'|'address'  ;  //manually korci

type newTypeUsingKeyOf =keyof PersonType;
// keyof er maddhome ager typer er value gulake union kora jay

const a: newType ='address'  // etar moto kore keyoff tao kora jabe
const b: newTypeUsingKeyOf='age';





function getProperties<X,Y extends keyof X>(obj:X , key:Y){
    obj[key]

}

const property = getProperties({name: 'Mr.x', age: 100}, 'age');

// ({name: 'mx x', age: 233},'name')

// const aa ={
//     name: 'mx x', 
//     age: 233,
// }

// a['age']