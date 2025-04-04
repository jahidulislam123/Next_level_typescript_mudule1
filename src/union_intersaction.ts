//or 


type NoobDeveloper ={
    name: string
}

type juniorDevloper ={
    name: string;
    expertise: string;
    experience : number;
};

const newDeveloper : NoobDeveloper | juniorDevloper = {
    name: 'mojnumia',
    experience : 6 ,
    expertise : 'Javascript'
}




//Comoomon intersaction

type NoobDeveloper1 ={
    name: string
}

type juniorDevloper1 = NoobDeveloper& {
   
    expertise: string;
    experience : number;
};

const newDeveloper1 : NoobDeveloper1 | juniorDevloper1 = {
    name: 'mojnumia',
    experience : 6 ,
    expertise : 'Javascript'
}



// arekta udahoron

type NextLevelDeveloper = juniorDevloper &{
    leadership : number;
}

