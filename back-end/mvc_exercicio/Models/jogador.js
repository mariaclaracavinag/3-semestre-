class Jogador{
    constructor(id, nome , nivel,pontuacao ){
   if (!nome || !nivel){
    throw new Error('nome ou nivel são obrigatorios')
   }
   this.id = id; 
   this.nome = nome; 
   this.nivel = nivel; 
   this.pontuacao= pontuacao; 


    }
    descricao(){ 
        return `${this.nome} - ${this.nivel}`
    }

    verificarPontuação(){
        if(this.pontuacao <= 150) return 'pontuação baixa'
        if(this.pontuacao <= 300) return 'pontuação Média'
        return 'pontuação alta '
    }
    adicionarPontos(){
      this.pontuacao += 50
    }
    
}

export default Jogador