import { LOGIN, LOGOUT, SET_DID_TRY_AL } from "../actions/auth";

const initialState = {
    token: null,
    userId: null,
    didTryAutoLogin : null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                token: action.token,
                userId: action.userId,
                didTryAutoLogin : true
            }
        case LOGOUT:
            return initialState
            
        case SET_DID_TRY_AL:
            return{
                ...state,
                didTryAutoLogin:true
            }
        default:
            return state;    
    }
};