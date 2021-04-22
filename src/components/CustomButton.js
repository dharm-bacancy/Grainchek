import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Dimensions} from 'react-native';
import Colors from '../constants/Colors';

const CustomButton = (props) =>{
    return(
        <View>
            <TouchableOpacity onPress={props.onSelect} style={{...styles.button, ...props.style}}>
                {props.children}
                <Text style={{...styles.buttonText,...props.styleButtonText}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        flexDirection: "row",
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent:'center',
        height: Dimensions.get("window").height / 12,
        width: Dimensions.get('window').width / 1.5,
        borderRadius: 19
    },
    buttonText:{
        fontFamily: "Gilroy-Bold",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        color: "white"
    }
});

export default CustomButton;