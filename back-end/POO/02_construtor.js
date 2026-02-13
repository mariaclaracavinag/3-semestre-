//criando a nossa primeira classe 
class Pessoa{
    //criando o metodo construtor 
    constructor(nome,idade){
         //atributos
    this.nome = nome;
    this.idade = idade; 
    }   
}

const pessoa1= new pessoa ("claudia",25);
console.log(pessoa1);
const pessoa2 = new pessoa ("Barreto", 30);