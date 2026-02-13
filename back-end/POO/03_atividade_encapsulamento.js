class bruxo{
    nome;
    idade;
    feitico;
    casa;
    nivelmagia;
    //privado
    #nivelenergia = 100;

   constructor(nome,idade,feitico,casa,nivelmagia){
        this.nome = nome; 
        this.idade = idade; 
        this.feitico = feitico; 
        this.casa = casa; 
        this.nivelmagia = nivelmagia; 
}
    apresentar (){
            return `${this.nome}, ${this.idade}, ${this.feitico}, ${this.casa}, ${this.nivelmgia}`
        }
    mostrarEnergia () {
        return this.#nivelenergia
    }
    recarregarEnergia(){
        this.#nivelenergia += 10; 
    }
    lancarfeitico(){
        this.#nivelenergia -= 10; 
    }
}
const bruxo1 = new bruxo ("hermione", 17, "Wingardium Leviosa", "grifinoria", "alto"); 

console.log(bruxo1.apresentar()); 
console.log(bruxo1.mostrarEnergia()); 
bruxo1.recarregarEnergia (); 
console.log(bruxo1.mostrarEnergia()); 
bruxo1.lancarfeitico(); 
console.log(bruxo1.mostrarEnergia()); 
