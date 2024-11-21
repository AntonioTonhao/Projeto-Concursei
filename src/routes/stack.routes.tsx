import React from 'react';

import Cadastro from '../pages/cadastro';
import Login from '../pages/login';
import RedefinirSenha from '../pages/redefinirSenha';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackRoutes(){

    return(
        
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
            <Stack.Screen
            name="Login"
            component={Login}
            />
            
            <Stack.Screen
            name="cadastro"
            component={Cadastro}
            />
            
            <Stack.Screen
            name="redefinirSenha"
            component={RedefinirSenha}
            />

            

        </Stack.Navigator>
        
    );
};

