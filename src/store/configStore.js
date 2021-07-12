import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import notesReducer from '../reducers/notesReducer'
import noteItemReducer from '../reducers/noteItemReducer'

const configStore = () => {
    const store = createStore(combineReducers({
        auth: authReducer,
        notes: notesReducer,
        noteItem: noteItemReducer
    }), applyMiddleware(thunk))
    return store
}

export default configStore