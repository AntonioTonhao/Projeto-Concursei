
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
    return (
    
    <ImageBackground 
    source={require('../images/fundo.png')}
    style={styles.fundo}
    resizeMode='contain'
    
    >
    <View style={styles.overlay} />

    <SafeAreaView style={styles.container}>
    
    <StatusBar backgroundColor='#449CD4' />
    
    <View style={styles.logo}>
    <Image style={styles.imagemLogo} source={require('../images/Logo.png')}></Image>
    </View>
    
    <View style={styles.corpo}>
    
    <Text style={styles.texto}>CADASTRA-SE</Text>
    
    <TextInput
    style={styles.input}
    
    placeholder='Usuario'
    />
    
    <TextInput
    style={styles.input}
    
    placeholder='Senha'
    />
    
    <TextInput
    style={styles.input}
    
    placeholder='Confirme sua senha'
    />
    
    <TouchableOpacity style={styles.botaoLogar} onPress = {() => navigation.goBack()}>
    <Text>CADASTRA-SE</Text>
    </TouchableOpacity>
    
    </View>
      
    <View style={styles.rodape}>
    <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.goBack()}>
    <Text style={styles.textoBotao}>JÁ TEM CONTA? FAÇA O LOGIN</Text>
    </TouchableOpacity>
    
    </View>
      

   
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo:{
    flex:1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  container: {
    flex: 1, 
   
  },
  
  logo:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center', 
  },
  
  imagemLogo:{
    marginTop:'5%'
  },
  
  corpo:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
  },
  
  texto:{
    fontSize:25,
    fontWeight: 'bold'
  },
  
  input:{
    borderColor:'#449CD4',
    borderWidth:2,
    width:'78%',
    height:40,
    marginTop:40,
    borderRadius:10,
    padding:10,
    backgroundColor:'rgba(255, 255, 255, 0.8)'
  },
 
  botaoLogar:{
    backgroundColor:'#449CD4',
    width:'50%',
    height:40,
    marginTop:15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    borderWidth:1,
  },
  
  botaoSenha:{
    alignSelf:'flex-start',
    marginLeft:'12%'
  },
 
  textoBotao:{
    textDecorationLine: 'underline'
  },
  text: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  botaoCadastro:{
  marginBottom:'5%',
  margin:40, 
  },
  rodape:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  }

  

});

