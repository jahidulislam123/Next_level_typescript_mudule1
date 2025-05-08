class Animal {
    public name : string;
    public species : string;
    public sounds: string;

    constructor(name:string,species:string, sounds:string ){
        this.name=name
        this.species=species;
        this.sounds=sounds;
    }

    // ekhane jodi amra function use kori take bola hoy method
    // ar amra method e arrow function use korbo na karon class e arrow function kaj kore na .. normal functionuse korbo

   public makeSound(){
        console.log(`The ${this.name} says ${this.sounds}`);
    }

}



const dog = new Animal ("Ger shepard ", 'dog', 'gHEW gHEW');
// etr nam instance
dog.makeSound();


const cat = new Animal("lal cat","cat","mew mew");
cat.makeSound();





// oporer jinista onk boro setake amra khob coto vabe korte pari 
// etar nam perameter pddoti
class Animal1 {
    // public name : string;
    // public species : string;
    // public sounds: string;

    constructor(public name:string,public species:string,  public sounds:string ){
        // this.name=name
        // this.species=species;
        // this.sounds=sounds;
    }

    // ekhane jodi amra function use kori take bola hoy method
    // ar amra method e arrow function use korbo na karon class e arrow function kaj kore na .. normal functionuse korbo

   public makeSound(){
        console.log(`The ${this.name} says ${this.sounds}`);
    }

}