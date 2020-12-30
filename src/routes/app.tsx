import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home';
import DrawerComponent from '../components/Drawer';



const Drawer = createDrawerNavigator();

export default function AppRoutes(){
    return(
        <Drawer.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
            drawerContent={ DrawerComponent }
        >
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}