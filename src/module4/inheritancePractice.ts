//Ekta parents class banabo 

class parents{

    name : string;
    age: number;
    village : string;
    post: string;

     constructor(name:string, age:number,village:string,post:string){

        this.age=age;
        this.name=name;
        this.post=post;
        this.village=village;

    }

    goToSchool(){
        return `age he ${2*age} and bari jabe tomr `
    }

}




class Student2 extends parents{
  

    constructor(name:string, age:number,village:string,post:string){
        super(name,age,village,post)
   

    }

    goToSchool(){
        return `age he ${2*age} and bari jabe tomr `
    }
}

const jahidu = new Student2("jahid",22,"jourpukuria",'dada');




class Teacher2 extends parents {
    Designation: string;

    constructor(name:string, age:number,village:string,post:string, Designation: string){

        super(name,age,village,post);
        this.Designation=Designation;
        

    }

    goToSchool(){
        return `age he ${2*age} and bari jabe tomr `
    }
}