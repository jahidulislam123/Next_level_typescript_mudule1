// jokhon ekta type arekta type er opor dependend hobe tahole seta conditional type bole 

// egula if else

type a1= string;
type a2= a1 extends string? string: null;

type a3 = undefined;
type a4 = number;

type d = a1 extends null
?null
:a3 extends number
?number 
: a4 extends null
? null
: never;


// conditional er ekta chomotkar udhahoron dekhi feli 

type Sheik ={
    wife1: string;
    wife2 : string;
}

type checkProperty <T>= T extends 'wife1'? true: false;

type CheckWife1 =checkProperty<Sheik>;

// cheeck korbe wife1 ace kina thakle true return korbe na thakle false return korbe 


// Ei jinish ta arekvabe kora jay\\

// keyof Sheik1 mane wife1 union wife2

type Sheik1 ={
    wife1: string;
    wife2 : string;
}

type checkProperty1 <T,K>= K extends keyof Sheik1? true: false;

type CheckWife11 =checkProperty1<Sheik1, 'wife1'>;


// Matha kharap korar jonno example \\

type Bandhubi = 'Monika'| 'Rachel'| 'Pheobl' ;

type RemoveBandhobi <T> = T extends 'Rachel'? never: T

type CurrentBandhobi = RemoveBandhobi<Bandhubi>;

// etatw fixex ar ami jodi ekhn nije pathay dynamicly korte cai 

type Bandhubi1 = 'Monika'| 'Rachel'| 'Pheobl' ;

type RemoveBandhobi1 <T, K> = T extends K ? never: T

type CurrentBandhobi1 = RemoveBandhobi1<Bandhubi, 'Monika'>;