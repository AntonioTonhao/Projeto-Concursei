import React from 'react';

import Home from '../pages/home';
import Favorito from '../pages/favorito';
import profile from '../pages/profile';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
            name="Home"
            component={Home}
            />

            <Tab.Screen
            name="Favorito"
            component={Favorito}
            />

            <Tab.Screen
            name="Perfil"
            component={profile}
            />
        </Tab.Navigator>
            
    );
};

