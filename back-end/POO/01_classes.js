//criando a nossa primeira classe 
class Pessoa{
    //atributos
    nome;
    idade; 
}

//criando um nojo objeto (instancia)
const pessoa1 = new Pessoa(); 
console.log(pessoa1)

//aplicando valores aos atributos 
pessoa1.nome = 'Maria Clara';
console.log(pessoa1) 
console.log(pessoa1.nome) 
pessoa1.idade = 17;
console.log(pessoa1) 
console.log(pessoa1.idade) 


//criando um nova pessoa 
const pessoa2 = new Pessoa(); 
pessoa2.nome = 'Gabriella'; 
pessoa2.idade = 17;
console.log(pessoa2) 