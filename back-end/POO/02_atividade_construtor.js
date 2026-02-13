class pessoa{
    
    constructor(nome,idade,feitico, casa, nivelmagia){

    this.nome = nome;
    this.idade = idade; 
    this.feitico = feitico; 
    this.casa = casa; 
    this.nivelmagia = nivelmagia; 
    }   
}

const pessoa1= new pessoa ("Hermione",17, "protego", "grifinoria", 5);
console.log(pessoa1);
const pessoa2 = new pessoa ("roni",17, "Wingardium Leviosa", "grifinoria", 4);
console.log(pessoa2);