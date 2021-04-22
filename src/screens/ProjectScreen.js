import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const ProjectScreen = props =>{
    return(
        <View>
            <Text>project screen!!</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default ProjectScreen;