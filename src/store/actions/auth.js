import AsyncStorage from '@react-native-community/async-storage';
import {loginUrl, logoutUrl} from '../../apis/index';
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL'

const deviceToken = 'fuSmuSBpTJ-0YS1WllOQ7U:APA91bHxFZIdfF9SCbozbydk-G42qS8talzF9atsnQzyNglQzvx5SV0jzrb10STFl5ZUv-TfirCt15Zu4S-UgTgevtOxlCIVtoaVsxXUGIZSLqO9MOz7z4xLaOXj0zwCBM6oFDBfBJk3'

export const authenticate = (token,userId) => {
    return dispatch => {
        dispatch({ type : LOGIN , token : token , userId : userId });
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(loginUrl,
            {
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    deviceToken : {
                        deviceTokenString :deviceToken,
                        os : Platform.OS
                    }
                })
            }
        );

        //callback();

        if (!response.ok) {
            const errorResData = await response.json();
            let message = errorResData.message
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        const token = resData.data.token
        const userId = resData.data.user._id
        
        dispatch(authenticate(token,userId))
        saveDataToStorage(token,userId)
    };
};

export const logout = () => {
    return async (dispatch,getState) => {
        const token = getState().auth.token
        const response = await fetch(logoutUrl,
        {
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json',
                'Authorization' : token
            },
            body:JSON.stringify({
                deviceToken : {
                    deviceTokenString : deviceToken,
                    os : Platform.OS
                }
            })
        })

        if(!response.ok){
            const errorResData = await response.json()
            let message = errorResData.message
            throw new Error(message);
        }
        const resData = await response.json();
        console.log(resData)

        AsyncStorage.removeItem('userData');
        return { type : LOGOUT }
    }
} 

const saveDataToStorage = (token,userId) => {
    AsyncStorage.setItem('userData',JSON.stringify({
        token : token ,
        userId : userId
    }))
}

export const setDidTryAl = () => {
    return { type : SET_DID_TRY_AL }
}
