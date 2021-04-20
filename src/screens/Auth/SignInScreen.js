import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const SignInScreen = props => {
    return(
        <View>
            <Text>SignIn Screen!!</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default SignInScreen;