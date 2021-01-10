import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Welcome, SignUp, SignIn,ConfirmEmail} from '../screens/auth/Auth';
import Home from '../screens/Home';


const Stack=createStackNavigator();


const AppStack=()=>(
    <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="SignUp">
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
)


export default AppStack;