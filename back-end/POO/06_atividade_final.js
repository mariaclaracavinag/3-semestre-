class sereia {
    nome;
    idade;
    #resistencia; 

    constructor(nome,idade, resistencia = 100) {
        this.nome = nome;
        this.idade = idade;
        this.#resistencia = resistencia;
    }
    apresentar() {
        return ` meu nome é ${this.nome}, tenho ${this.idade} anos `
    }
    MostrarResistencia(){
        return this.#resistencia
    }
    recarregarResistencia(){
        this.#resistencia += 10; 
    }
    lancarPoder(){
        this.#resistencia -= 10; 
    }
}

class rosa extends sereia {
    cor;
    constructor(nome, idade, cor) {
        super(nome,idade)
        this.cor = cor
    }
    apresentar() {
        return `meu nome é ${this.nome}, tenho ${this.idade} anos, minha cor é ${this.cor}`
    }
}
class amarelo extends sereia {
    cor;
    constructor(nome, idade, cor) {
        super(nome,idade)
        this.cor = cor
    }
    apresentar() {
        return `meu nome é ${this.nome}, tenho ${this.idade} anos, minha cor é ${this.cor}`
    }
}


const barbie = new rosa("barbie", 15, "rosa")
console.log(barbie.apresentar());
console.log(barbie.MostrarResistencia()); 
barbie.lancarPoder();
console.log(barbie.MostrarResistencia()); 
barbie.recarregarResistencia(); 
console.log(barbie.MostrarResistencia());
const mariaclara = new amarelo("maria clara", 14,"amarelo")
console.log(mariaclara.apresentar());