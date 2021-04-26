import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import SignInScreen, {screenOptions as SignInScreenOptions} from '../screens/Auth/SignInScreen';
import ProjectScreen, {screenOptions as ProjectScreenOptions} from '../screens/Project/ProjectScreen';

const stack = createStackNavigator();

const GrainchekNavigator = () =>{
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName='SignIn'>
                <stack.Screen
                    name='SignIn'
                    component={SignInScreen}
                    options={SignInScreenOptions}
                />
                <stack.Screen
                    name='Project'
                    component={ProjectScreen}
                    options={ProjectScreenOptions}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default GrainchekNavigator;