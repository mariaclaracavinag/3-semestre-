//funçao anonimaaaa
const saudacao2 = function(nome){
    console.log (`tenha um bom dia ${nome}`);
}
saudacao2('douglas'); 

//arrow function 
const saudacao3 = (nome) =>{
    console.log (`tenha um bom dia ${nome}`);
}
saudacao3('douglas'); 

//exercicio somaaaa
//função anonimaa soma exercicio 
 const soma2 = function (n1, n2) {
    let resultado = n1 +  n2;
    return resultado;
}
console.log(soma2(8,7));

//arrow function somaaa
 const soma3 = (n1, n2) => {
    let resultado = n1 +  n2;
    return resultado;
}
console.log(soma3(8,7));