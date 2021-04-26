import React,{useState,useCallback,useEffect} from 'react';
import {StyleSheet,Text,View,Modal,TouchableOpacity,TextInput,Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import CustomButon from '../../components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import * as projectsActions from '../../store/actions/projects';

const ProjectModal = props =>{
    const [pname, setPname] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const dispatch = useDispatch();
    const submitHandler = async() => {
        //console.log('Submitting!!');
        await dispatch(
            projectsActions.createProject(pname,description,tag)
        );
        props.closeModal()
    };
    
    return(
        <Modal
            animationType='fade'
            visible={props.visible}
            transparent={true}
        >
            <TouchableOpacity onPress={props.closeModal} style={styles.modalScreen}>
                <View style={styles.modal}>
                    <Text style={styles.headerText}>+ Add New Project</Text>
                    <Text style={styles.formText}>Generate New Project Form:</Text>
                    <View style={styles.projectName}>
                        <TextInput
                            keyboardType='default'
                            placeholder='Enter Project Name'
                            placeholderTextColor={Colors.gray}
                            color={Colors.black}
                            value={pname}
                            onChangeText={text => setPname(text)}
                        />
                    </View>
                    <View style={styles.description}>
                        <TextInput
                            keyboardType='default'
                            placeholder='Describe here...'
                            placeholderTextColor={Colors.gray}
                            color={Colors.black}
                            value={description}
                            onChangeText={text => setDescription(text)}
                        />
                    </View>
                    <View style={styles.projectName}>
                        <TextInput
                            keyboardType='default'
                            placeholder='Search tags'
                            placeholderTextColor={Colors.gray}
                            color={Colors.black}
                            value={tag}
                            onChangeText={text => setTag(text)}
                        />
                    </View>
                    <CustomButon
                        title='+ Add Project'
                        style={styles.addProjectButton}
                        onSelect={submitHandler}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:'3%'
    },
    modalScreen:{
        flex:1,
        justifyContent:'center',
        backgroundColor:Colors.transparent
    },
    modal:{
        marginHorizontal:30,
        backgroundColor:'white',
        overflow:'hidden',
        borderRadius:10
    },
    formText:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:'5%',
        marginLeft:'3%'
    },
    projectName:{
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'white',
        marginRight:'6%',
        marginLeft:'4%',
        marginTop:'7%',
        marginBottom:'8%',
        borderColor:'gray'
    },
    description:{
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'white',
        marginRight:'6%',
        marginLeft:'4%',
        borderColor:'gray',
        paddingBottom:'5%'
    },
    addProjectButton:{
        backgroundColor:Colors.primaryColor,
        marginTop:Dimensions.get('window').height /40,
        marginLeft:Dimensions.get('window').width /12,
        marginBottom:10,
        width:Dimensions.get('window').width / 1.5,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
});

export default ProjectModal;