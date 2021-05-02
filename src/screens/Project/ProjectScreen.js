import React, {useEffect,useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Alert,TextInput, ToastAndroid} from 'react-native';
import Colors from '../../constants/Colors';
import Modal from '../../components/Modal/Modal';
import Icon from 'react-native-vector-icons/Feather';
import ProjectItem from '../../components/ProjectItem';
import {useSelector,useDispatch} from 'react-redux';
import * as projectsAction from '../../store/actions/projects';
import * as authAction from '../../store/actions/auth';

const ProjectScreen = props =>{
    const userProject = useSelector(state => state.projects.availableProject);
    const dispatch = useDispatch();
    const [pageNo,setPageNo] = useState(1);
    const clearPageNo = () => setPageNo(1);
    const [searchTerm,setSearchTerm] = useState('');
    const showToast = message => ToastAndroid.show(message.toString(), ToastAndroid.SHORT);
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

    const searchHandler = (term) => {
        clearPageNo()
        setSearchTerm(term)
        loadProjectsFn(1,term)
    }

    const logoutFn = async() =>{
        try {
            await dispatch(authAction.logout())
        } catch (error) {
            showToast(error)
        }
    };

    useEffect( () => {
        loadProjectsFn(pageNo)
    }, []) 

    return(
        <View style={{flex:1}}>
            <TouchableOpacity onPress={logoutFn}>
                <Text style={styles.logout}>LOGOUT</Text>
            </TouchableOpacity>
            <View style={styles.projectHeader}>
                <Text style={styles.headerText}>Projects </Text>
                <Modal/>
            </View>
            <View style={styles.searchBar}>
                <Icon
                    name='search'
                    size={20}
                    color='black'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Search Project'
                    placeholderTextColor={Colors.primaryColor}
                    onChangeText={searchHandler}
                    color='black'
                />
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
    },
    searchBar:{
        borderWidth : 1,
        borderColor: Colors.primaryColor,
        borderRadius:8,
        flexDirection:'row',
        alignItems:"center",
        paddingHorizontal:10,
        marginTop:'5%',
        marginHorizontal:'5%'
    },
    input : {
        flex : 1,
        marginLeft : 5,
    },
    logout:{
        color:Colors.red,
        fontSize:25,
        fontWeight:"bold",
        marginTop:'5%',
        marginLeft:'5%',
        borderColor:Colors.red,
        borderWidth:2,
        borderRadius:10,
        paddingLeft:'3%',
        marginRight:'65%'
    }
});

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default ProjectScreen;