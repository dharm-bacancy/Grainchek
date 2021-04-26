import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import Colors from '../../constants/Colors';
import Modal from '../../components/Modal/Modal';
import ProjectItem from '../../components/ProjectItem';
import {useSelector,useDispatch} from 'react-redux';
import * as projectsAction from '../../store/actions/projects';

const ProjectScreen = props =>{
    const userProject = useSelector(state => state.projects);
    const dispatch = useDispatch();
    return(
        <View>
            <View style={styles.projectHeader}>
                <Text style={styles.headerText}>Projects </Text>
                <Modal/>
                <FlatList
                    data={userProject}
                    renderItem={itemData => (
                        <ProjectItem
                            name={itemData.item.pname}
                            des={itemData.item.description}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    projectHeader:{
        flexDirection:'row',
        marginTop:'5%',
        marginLeft:'4%'
    },
    headerText:{
        fontWeight:"bold",
        fontSize:30
    }
});

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default ProjectScreen;