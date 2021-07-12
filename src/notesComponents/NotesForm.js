import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { startAddNotes } from '../actions/notesActions'
import '../styles/notesStyles/noteForm.css'

const NoteForm = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.name==='title'){
            setTitle(e.target.value)
        } else if(e.target.name==='body'){
            setBody(e.target.value)
        }
    }

    const formSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: title,
            body: body
        }
        console.log(formData)
        dispatch(startAddNotes(formData))
        setTitle('')
        setBody('')
    }

    return (
        <div className="note-form-container">
            <h2>Add Note</h2>
            <form className="note-form-control" onSubmit={formSubmit}>
                <input type="text" name="title" placeholder="Title" value={title} onChange={handleChange}/> 
                <textarea name="body"  cols="30" rows="10" placeholder="Body" value={body} onChange={handleChange}></textarea> 
                <div className="btn-div">
                    <input className="btn-submit" type="submit" value="save" />
                </div>
            </form>
        </div>
    )
}

export default NoteForm