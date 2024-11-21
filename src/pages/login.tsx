import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../contexts/Auth';


export default function Login() {
    const {signIn} = useAuth();
    const [password,setPassword] = useState('');
    const [usuario,setUsuario] = useState('');
    
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
    
    <Text style={styles.texto}>REALIZE SEU LOGIN</Text>
    
    <TextInput
    style={styles.input}
    placeholder='Usuario'
    value ={usuario}
    onChangeText={setUsuario}
    />
    <TextInput
    style={styles.input}
    placeholder='Senha'
    value ={password}
    onChangeText={setPassword}
    />
    
    <TouchableOpacity style={styles.botaoSenha} onPress={() => navigation.navigate('redefinirSenha')}>
    <Text style={styles.textoBotao}>Esqueceu sua senha?</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.botaoLogar} onPress={() => signIn(usuario,password)}>
    <Text>ENTRAR</Text>
    </TouchableOpacity>
    
    </View>
    
    <View style={styles.rodape}>
    
     <View style={styles.linhaOU}>
      
      <View style={styles.line} />
      <Text style={styles.text}>OU</Text>
      <View style={styles.line} />
     
     </View> 

    <View style={styles.viewAPI}>
    <TouchableOpacity style={styles.botaoAPI}>
    <Image style={styles.imagemBotao} source={require('../images/google.png')}/>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.botaoAPI}>
    <Image style={styles.imagemBotao} source={require('../images/gov.png')}/>
    </TouchableOpacity>
    </View>
    
    <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate('cadastro')}>
    <Text style={styles.textoBotao}>Não tem conta? Cadastre-se</Text>
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
  
  linhaOU:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%', 
    marginVertical: 20,
    
  },
  
  line: {
    flex: 1, 
    height: 1,
    backgroundColor: 'black',
  },
  
  text: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  rodape:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
  },
  
  viewAPI:{
  flexDirection:'row',
  width:'25%',
  height: 50,
  justifyContent:'center',
  
  },
  
  botaoAPI:{
  backgroundColor:'white',
  width:'60%',
  height:60,
  alignItems:'center',
  justifyContent:'center',
  margin:20,
  borderRadius:15,
  },
  
  imagemBotao:{
    width:'80%',
    height: 50,
  },
  
  botaoCadastro:{
  marginBottom:'5%',
  margin:60, 
  },

  

});

