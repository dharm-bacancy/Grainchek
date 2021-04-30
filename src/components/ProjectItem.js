import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProjectItem = props => {
    return(
        <View style={styles.projectModal}>
            <View style={styles.iconModel}>
                <Text style={styles.projectName}>{props.name}</Text>
                <TouchableOpacity onPress={props.onDelete}>
                    <Icon name='delete' size={28} color={Colors.red} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.description}>{props.des}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    projectModal: {
        height:100,
        width:350,
        borderRadius:10,
        backgroundColor:Colors.cyan,
        marginTop:'5%',
        marginLeft:'8%'
    },
    projectName:{
        fontSize:23,
        fontWeight:'bold',
        color:'black',
        marginLeft:'5%',
        //marginRight:'10%'
    },
    description:{
        color:Colors.gray,
        fontSize:20,
        marginLeft:'5%',
        marginTop:'5%'
    },
    iconModel:{
        flexDirection:'row',
        //justifyContent:'space-between',
        //paddingRight:'10%',
        //marginRight:'10%'
    },
    icon:{
        marginLeft:'50%'
    }
});

export default ProjectItem;