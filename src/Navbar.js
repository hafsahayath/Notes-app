import React from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from './actions/authActions'
import { clearState } from './actions/noteItemActions'
import Login from './authComponents/Login'
import Register from './authComponents/Register'
import NotesContainer from './notesComponents/NotesContainer'
import './styles/authStyles/navbar.css'
import Home from './notesComponents/Home'

const Navbar = (props) => {
    const loggedIn = useSelector(state=>state.auth.login) 
    const dispatch = useDispatch()

    const linkStyle = {
        textDecoration:'none',
        color: 'whitesmoke', 
        fontSize: 'large'
    }

    return (
        <div className="navbar-container">
            <ul>
                {
                    loggedIn &&
                    <div className="list-container">
                        <div className="container-1">
                            <li><Link style={linkStyle} to="/home"><i className="fas fa-book-open"></i> NoteBook</Link></li>
                        </div>
                        <div className="container-2">
                            <li><Link style={linkStyle} to="/notes">Notes</Link></li>
                            <li><Link style={linkStyle} to="/" onClick={()=>{
                                dispatch(logoutUser())
                                dispatch(clearState())
                            }}>Logout</Link></li>
                        </div>
                    </div>
                }
            </ul>

            <Route path="/" component={Login} exact/>
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home}/>
            <Route path="/notes" render={(props)=>{
                return loggedIn ? <NotesContainer {...props} /> : <Redirect to="/login" />
            }} />
        </div>
    )
}

export default Navbar
