// aqui é onde importaremos todas as bibliotecas e componentes que utilizaremos
import { StatusBar } from 'expo-status-bar';
//todo componente visual utilizado em react native precisa ser importado
import { StyleSheet, Text, View } from 'react-native';


//componente tradicional
export default function Aul01() {
  return (
    //o componente view corresponde ao div,main,section, header ou qualquer outro do html 
    <View style={estilos.container}>
      {/* O componente text, corresponde ao p,h1,h2,h3,span do html*/}
      <Text style={estilos.titulo}>Hello world </Text>
      <Text style= {{fontWeight: 'bold'}}>Esse é meu primeiro App </Text>
      {/* defino e estilizo a barra de status do dispositivo */}
      <StatusBar style="auto" />
      {/* Aqui vou colocar o exercicicio */}
      <View style={{width: '100%'}}> 
       <Text style= {{fontWeight: 'bold', color: '#94040e', textAlign: 'left'}}> Maria </Text>
       <Text style= {{fontWeight: 'bold', color: '#1b40c4', textAlign: 'right'}}> Cavina </Text>
       <Text style= {{fontWeight: 'bold', color: '#000000', textAlign: 'center'}}> Clara</Text>
    </View>
   
    </View>
  );
}
//para estilizarmos em react native importamos o stylesheet 
//e fazemos um objeto de estilização igual ao react 
const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    weight: '100%'
  },
  titulo:{
    fontSize:30
  }
});
