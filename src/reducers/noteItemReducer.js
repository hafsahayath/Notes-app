const noteItemInitialState = {}

const noteItemReducer = (state=noteItemInitialState, action) => {
    switch(action.type){

        case 'SINGLE_NOTE':{
            return {...action.payload}
        }

        case 'CLEAR':{
            return noteItemInitialState
        }

        default:{
            return {...state}
        }
    }
}

export default noteItemReducer