import React from 'react'
import { useSelector } from 'react-redux'
import NoteItem from './NoteItem'

const NoteList = (props) => {
    const notes = useSelector(state=>state.notes)

    return (
        <div>
            {
                notes.length===0? (
                    <div>
                        <h2>No notes found</h2>
                        <h3>Add your first note</h3>
                    </div>
                ) : (
                    <div>
                        <h1>My notes</h1>
                        {notes.map(ele=>{
                            return <NoteItem key={ele._id} {...ele}/>
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default NoteList
