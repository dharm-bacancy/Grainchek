export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'http://18.223.66.20:3000/user/login',
            {
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );
        if (!response.ok) {
            const errorResData = await response.json();
            let message = errorResData.message
            throw new Error(message);
        }

        const resData = await response.json();
        const token = resData.data.token
        console.log(resData);
        dispatch({type: LOGIN, username : email , token : token});
    };
};
