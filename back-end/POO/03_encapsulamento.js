class pessoa{
    //atributo privadooo
    #documento; 

    //atributo publico
    nome;
    idade; 

    constructor(nome,idade,documento){
        this.nome = nome; 
        this.idade = idade; 
        this.#documento = documento; //privado
    }
    apresentar (){
        return `${this.nome}, ${this.idade}`
    }
    mostrarDocumento(){
        return this.#documento; 
    }
}

const pessoa1 = new pessoa ('silva', 28, '12345678900');

console.log(pessoa1.apresentar());
console.log(pessoa1.mostrarDocumento());
