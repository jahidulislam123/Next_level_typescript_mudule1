class Parents{
    name: string;
    age: number;
    address: string;

    constructor(name:string, age:number,address:string){
        this.name= name;
        this.age= age;
        this.address=address;
    }

    makeSleelp(hours: number):string{
        return `This ${this.name} will sleep for ${hours}`
    }

}



class Student extends Parents {

    // inheritance korbo 

    constructor(name:string, age:number,address:string){
        super(name,age,address);

        // this dile ki hoto janen ei stuent class theke astw ar super dile jar theke extend korci tar theke asbe 
    }

    // makeSleelp(hours: number):string{
    //     return `This ${this.name} will sleep for ${hours}`
    // }


}

const Student1 = new Student('Mr.z', 23, 'Uganda');
// Student1.makeSleelp();


class Teacher extends Parents {
   
    designation: string;

    constructor(name:string, age:number, address:string, designation:string){
       super(name,age,address)
       this.designation=designation;

    }

    takeClasses (numberOfClass: number):string{
        return `This ${this.name} will take ${numberOfClass} class`;
    }

}

const teacher1 = new Teacher("mr y",23,'usa','proffessor');
// teacher1.makeSleelp()

/// Ekhno ekta kaj korbo common properties gula niye ekta parents class toiri korbo 