const notesInitialState = []
const notesReducer = (state=notesInitialState, action) => {
    switch(action.type){

        case 'ADD_NOTE':{
            const res = action.payload
            if(res.hasOwnProperty('errors')){
                alert(res.errors)
            } else {
                return [...state, {...action.payload}]
            }
        }

        case 'DELETE_NOTE':{
            const res = state.filter(ele=>{
                return ele._id !== action.payload
            })
            return res
        }

        default:{
            return [...state]
        }
    }
}

export default notesReducer