import React, {useReducer,useCallback,useState,useEffect} from 'react';
import {StyleSheet,View,Text,Image,ImageBackground,TextInput,Dimensions,ScrollView,Button,ActivityIndicator,Alert} from 'react-native';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';
import {useDispatch} from 'react-redux';
import * as authAction from '../../store/actions/auth'; 
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for(const key in updatedValidities) {
            updatedFormIsValid= updatedFormIsValid && updatedValidities[key];
        }
        return{
            formIsValid:updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const SignInScreen = props => {
    const [isloading, setIsloading] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email:'',
            password:''
        },
        inputValidities: {
            email:false,
            password: false
        },
        formIsValid: false
    });

    useEffect(()=>{
        if (error) {
            Alert.alert('An Error Occurred!', error, [{text:'Okay'}]);
        }
    }, [error]);

    const authHandler = async () =>{
        let action;
        // if (isSignup) {
        //     action = authAction.signup(
        //         formState.inputValues.email,
        //         formState.inputValues.password
        //     ); 
        // } else {
            action = authAction.login(
                formState.inputValues.email,
                formState.inputValues.password
            );
        //}
        setError(null);
        setIsloading(true);
        try {
            await dispatch(action);
            props.navigation.replace('Project');
        } catch (err) {
            setError(err.message);
            setIsloading(false);
        }
        console.log(error)
    };

    const inputChageHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: inputValue, 
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchFormState]);
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/signin_background.png')} style={styles.background}>
                <Text style={styles.headerText}>Welcome back</Text>
                <ScrollView>
                    <Input
                        id='email'
                        label='E-Mail'
                        keyboardType='email-address'
                        required
                        email
                        autoCapitalized='none'
                        errorText='Please enter valid email address'
                        onInputChange={inputChageHandler}
                        initialValue=''
                        placeholder='Enter Your Email'
                        color='black'
                    />
                    <Input
                        id='password'
                        label='Password'
                        keyboardType='default'
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalized='none'
                        errorText='Please enter valid password'
                        onInputChange={inputChageHandler}
                        initialValue=''
                        placeholder='Enter Your Password'
                        color='black'
                    />
                    <CustomButton title='SIGN IN' style={styles.signUpButton} onSelect={authHandler}/>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:350,
        flex:1,
        resizeMode:'contain'
    },
    headerText:{
        color:Colors.white,
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:'35%',
        marginBottom:'35%'
    },
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink'
    },
    authContainer:{
        width:'80%',
        maxWidth:400,
        maxHeight: 400,
        padding:20
    },
    buttonContainer:{
        marginTop: 10
    },
    signUpButton:{
        backgroundColor:Colors.primaryColor,
        marginTop:Dimensions.get('window').height /25,
        marginLeft:Dimensions.get('window').width /6,
        marginBottom:10,
        width:Dimensions.get('window').width / 1.5,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
});

export const screenOptions= navData => {
    return{
        headerShown: false
    };
};

export default SignInScreen;