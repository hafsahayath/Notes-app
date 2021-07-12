import React from 'react'
import NoteForm from './NotesForm'
import NoteList from './NoteList'
import '../styles/notesStyles/noteContainer.css'

const NotesContainer = (props) => {
    return (
        <div className="notes-main-container">
            <NoteList />
            <NoteForm />
        </div>
    )
}

export default NotesContainer
