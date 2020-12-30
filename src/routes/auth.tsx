import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screen/SignIn';

const Auth = createStackNavigator();

export default function RouteAuth(){
    return (
        <Auth.Navigator screenOptions={{
            headerShown: false
        }}>
            <Auth.Screen name="SignIn" component={SignIn}/>
        </Auth.Navigator>
    )
}