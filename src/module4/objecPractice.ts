class Person{
    name: string;
    age: number;
    village: string;
   

    constructor(name:string, age:number,village:string){
        this.name=name;
        this.age=age;
        this.village=village;

    }

    goToSchool (){
        console.log(`The person name ${this.name} and age is ${this.age} tar bari ${this.village}`);
    }
}

// make a instance 

const jahid1 =new Person("Jahidul islam",26,"Jourpukuria");
jahid1.goToSchool();


// Ekhn ei jinistake jevabe simple kora jay 


class Person1{
    // name: string;
    // age: number;
    // village: string;
   

    constructor(public name:string,public age:number, public village:string){
        // this.name=name;
        // this.age=age;
        // this.village=village;

    }

    goToSchool (){
        console.log(`The person name ${this.name} and age is ${this.age} tar bari ${this.village}`);
    }
}

// make a instance 

const jahid11 =new Person("Jahidul islam",26,"Jourpukuria");
jahid11.goToSchool();