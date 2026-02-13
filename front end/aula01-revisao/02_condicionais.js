const idade = 17;

if (idade >= 18) {
    console.log (`voce é adulto`)
} else if (idade >= 12 && idade < 18) {
    console.log(`voce é adole`)
} else {
    console.log (`voce é um baby`)
}; 


//operador ternario
let tema = 'dark';
let corFundo;
if (tema == 'dark') {
    corFundo = 'preto';
}else {
    corFundo = 'branco';
}
//condiçao      se verdadeira       senão 
tema == 'dark'? corFundo = 'preto' : corFundo = 'branco';