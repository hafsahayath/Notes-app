import axios from 'axios'

export const startRegisterUser = (userData) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register', userData)
            .then((response)=>{
                const result = response.data
                dispatch(registerUser(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const startLoginUser = (userData) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login', userData)
        .then((response)=>{
            const result = response.data
            dispatch(loginUser(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    }
}

const loginUser = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

const registerUser = (data) => {
    return {
        type: 'REGISTER',
        payload: data
    }
}