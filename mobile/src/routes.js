import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';

const AppStack = createStackNavigator();

import Login from './pages/login'
import Register from './pages/register'

const Routes = ()=>{
    return (
        <NavigationContainer >
            <AppStack.Navigator  headerMode="none">
                <AppStack.Screen name='Login' component={Login} />
                <AppStack.Screen name='Register' component={Register} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;