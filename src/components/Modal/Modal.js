import React,{useState} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import ProjectModal from './ProjectModal';

const Modal = props =>{
    const [isModalOpen,setIsModalOpen] = useState(false);

    return(
        <View>
            <TouchableOpacity onPress={()=>setIsModalOpen(true)}>
                <Text style={styles.addProjectText}>+ Add project  </Text>
            </TouchableOpacity>
            <ProjectModal
                visible={isModalOpen}
                closeModal={()=>setIsModalOpen(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    addProjectText:{
        fontWeight:'bold',
        fontSize:25,
        color:Colors.green,
        marginLeft:'33%',
        marginTop:'2%'
    },
});

export default Modal;