import axios from "axios";

export const startAddNotes = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', formData,{
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(addSingleNote(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const startRemoveNote = (id) => {
    return (dispatch) => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
            axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('token')
                }
            })
            .then((response)=>{
                const result = response.data
                dispatch(deleteSelectedNote(result._id))
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    }
}

const deleteSelectedNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        payload: id
    }
}

const addSingleNote = (data) => {
    return {
        type: 'ADD_NOTE',
        payload: data
    }
}