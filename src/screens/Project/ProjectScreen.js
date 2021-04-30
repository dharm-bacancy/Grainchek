import React, {useEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Alert} from 'react-native';
import Colors from '../../constants/Colors';
import Modal from '../../components/Modal/Modal';
import ProjectItem from '../../components/ProjectItem';
import {useSelector,useDispatch} from 'react-redux';
import * as projectsAction from '../../store/actions/projects';

const ProjectScreen = props =>{
    const userProject = useSelector(state => state.projects.availableProject);
    const dispatch = useDispatch();
    const deleteHandler = (pname) => {
        Alert.alert('Are you sure?', 'Do you want to delete this project?', [
            {text:'No', style:'default'},
            {
                text:'Yes',
                style:'destructive',
                onPress:()=>{
                    dispatch(projectsAction.deleteProject(pname))
                }
            }
        ]);
    };
    console.log(userProject);
    const loadProjectsFn = async () => {
        try {
            await dispatch(projectsAction.loadProjects())
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( () => {
        loadProjectsFn()
    }, []) 
    return(
        <View style={{flex:1}}>
            <View style={styles.projectHeader}>
                <Text style={styles.headerText}>Projects </Text>
                <Modal/>
            </View>
            <FlatList style={{flex:1}}
                keyExtractor={(item,index) => index}
                data={userProject}
                onEndReached={loadProjectsFn}
                renderItem={itemData => {
                    return (
                        <ProjectItem
                            name={itemData.item.pname}
                            des={itemData.item.description}
                            onDelete={deleteHandler.bind(this, itemData.item.pname)}
                        />
                    );
                }}
            /> 
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