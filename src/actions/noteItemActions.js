import axios from "axios"

export const startShowNote = (id) => {
    return (dispatch) => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(showNote(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const clearState = () => {
    return {
        type: 'CLEAR'
    }
}

const showNote = (data) => {
    return {
        type: 'SINGLE_NOTE',
        payload: data
    }
}