import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from '../contexts/Auth';

export default function Home(){
    const {signOut} = useAuth();
    return(
        <SafeAreaView style={styles.container}>
        <View>
            
            <TouchableOpacity style={styles.botao} onPress={signOut}>
               <Text>SAIR DO APP</Text> 
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    botao:{
        backgroundColor:'red',
        width:100,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    }

})