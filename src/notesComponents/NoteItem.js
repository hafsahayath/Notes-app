import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRemoveNote } from '../actions/notesActions'
import { clearState, startShowNote } from '../actions/noteItemActions'
import swal from 'sweetalert';
import '../styles/notesStyles/noteItem.css'

const NoteItem = ({_id:id, title, body}) => {
    const noteItem = useSelector(state=>state.noteItem)
    const [note, setNote] = useState(noteItem)
    const [status, setStatus] = useState(false)

    const dispatch = useDispatch()

    console.log(note)

    useEffect(()=>{
        if(Object.keys(noteItem).length>0){
            setNote(noteItem)
            setStatus(true)
        }
        dispatch(clearState())
    },[noteItem])

    const handleDelete = () => {
        dispatch(startRemoveNote(id))
    }

    const displayContent = () => {
        dispatch(startShowNote(id))
    }

    if(status) {
        swal({
            title: note.title, 
            text: note.body
        })
        setStatus(false)
    }

    return (
        <div className="note-item-container">
            <h2 style={{cursor:'pointer'}} onClick={displayContent}>{title}</h2>
            <button onClick={()=>handleDelete(id)}>delete</button>
        </div>
    )
}

export default NoteItem
