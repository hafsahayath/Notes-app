const authInitialState = {register: false, login: false}

const authReducer = (state=authInitialState, action) => {
    switch(action.type){

        case 'REGISTER':{
            const res = action.payload
            if(res.hasOwnProperty('errors')){
                alert(res.errors)
                return {...state}
            } else {
                alert('registeration successful')
                return {
                    register: true,
                    login: false
                }
            }
        }

        case 'LOGIN':{
            const res = action.payload
            if(res.hasOwnProperty('errors')){
                alert(res.errors)
                return {...state}
            } else {
                alert('login successful')
                localStorage.setItem('token', res.token)
                return {
                    register: true,
                    login: true
                }
            }
        }

        case 'LOGOUT_USER':{
            alert('logged out successfully')
            localStorage.removeItem('token')
            return authInitialState
        }

        default:{
            return {...state}
        }
    }
}

export default authReducer