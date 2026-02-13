class pessoa {
    nome; 
    constructor (nome){
        this.nome = nome
    }

    apresentar(){
        return `${this.nome}`
    }
}

class pessoaFisica extends pessoa {
    constructor(nome,cpf){
        super(nome)
        this.cpf=cpf
    }
}


class pessoaJuridica extends pessoa {
    cnpj; 
    constructor(nome,cnpj){
        super(nome)
        this.cnpj=cnpj
    }
}

const ana = new pessoaFisica("ana", "123.456.789.-00")
console.log(ana.apresentar());

const sesi = new pessoaJuridica("SESI", "12.345.678/0001-90")
console.log(sesi.apresentar());


