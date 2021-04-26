import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Colors from '../constants/Colors';

const ProjectItem = props => {
    return(
        <View style={styles.projectModal}>
            <Text style={styles.projectName}>{props.name}</Text>
            <Text style={styles.description}>{props.des}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    projectModal: {
        height:50,
        width:70,
        borderRadius:10,
        backgroundColor:Colors.cyan
    },
    projectName:{
        fontSize:23,
        fontWeight:'bold'
    },
    description:{
        color:Colors.gray,
        fontSize:18
    }
});

export default ProjectItem;