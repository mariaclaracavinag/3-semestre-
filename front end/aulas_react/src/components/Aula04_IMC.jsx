const Aula04_IMC = ({nome,peso,altura,cor}) => {

   // let nome = 'maurício';
 //let peso = 75; 
   // let altura = 1.70; 
    let imc = peso / (altura ** 2 ); 

    return(
    <div> 
        <h3>Calculatora de IMC</h3>
        <p style ={{color: cor}}> olá {nome} </p>
        <p style ={{color: cor}}> altura: {altura}m </p>
        <p style ={{color: cor}}> peso: {peso}kg</p>
        <p> IMC: {imc.toFixed(1)}kg/m²</p>
        </div> 
    ) 
}

export default Aula04_IMC