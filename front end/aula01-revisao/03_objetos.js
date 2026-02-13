const pais ={
    "nome":"Brasil",
    "capital":"Brasilia",
    "populacao":211000000,
    "idioma":"Portugues",
    "região":{
        "sudeste" :"são paulo / rio de janeiro /minas /es",
        "SUL" :"PR RS SC",
        "NORTE":"AM AC RR RO PA AP TO"
    }
     
}
console.log(pais.idioma);
console.log(pais.região.SUL);

//let nome = pais.nome;
//let capital  = pais.capital;
//let populacao  = pais.populacao;
//let idioma  = pais.idioma;

let { nome, capital, populacao, idioma} = pais;
console.log(nome,capital,populacao,idioma); 