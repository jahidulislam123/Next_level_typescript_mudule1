const addMeInMyCrushMind =<T extends {name:string,age:number,salary: number}>(myInfo:T)=>{
    // er mane hocce je vai tomi ja icca tai pathay but amar ei value gula thakte hobe ... tar mane hocce extends korci ja ta pathale ami recieve korboan .. mane name age salary astei hobe .. force kora je egula lagbei
    const ccrush ="Kaktarua";
    const newData= {...myInfo, crush};
    return newData;
}

type myInfoType={
    name: string;
    age:number;
    salary: number;
}

const myInfo1: myInfoType ={
    name: 'persian',
    age: 100,
    salary : 1232323,
}

const result9 = addMeInMyCrushMind<myInfoType>(myInfo1);
result9