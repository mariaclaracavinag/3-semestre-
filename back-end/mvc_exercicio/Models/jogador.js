class jogador {
    constructor(id, nome , nivel,pontuação ){
   if (!nome || !nivel){
    throw new Error('nome ou nivel são obrigatorios')
   }
   this.id = id; 
   this.nome = nome; 
   this.nivel = nivel; 
   this.pontuação = pontuação; 


    }
    descricao (){ 
        return `${this.nome} - ${this.nivel}`
    }

    verificarPontuação (){
        if(this.pontuação <= 150) return 'pontuação baixa'
        if(this.pontuação <= 300) return 'pontuação Média'
        return 'pontuação alta '
    }
    
}

export default jogador