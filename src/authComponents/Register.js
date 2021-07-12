import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { startRegisterUser } from '../actions/authActions'
import '../styles/authStyles/form-styling.css'

const Register = (props) => {
    const registered = useSelector(state=>state.auth.register)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(registered){
            props.history.push("/")
        }
    },[registered])

    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Username is required'),
            email: Yup.string()
                .email('invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be atleast 6 characters')
                .required('Password is required')
        }),
        onSubmit: (values, {resetForm}) => {
            dispatch(startRegisterUser(values))
            resetForm({values:''})
        }
    })

    return (
        <div className="main-container">
            <h1>Register</h1>
            <form className="form-container" onSubmit={formik.handleSubmit}>
                <div className="flex-item">
                    <input type="text" name="username" placeholder="enter the username" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange}/> <br />  
                    {formik.touched.username && formik.errors.username ? <small>{formik.errors.username}</small> : null} 
                </div>
                <div className="flex-item">
                    <input type="text" name="email" placeholder="enter the email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}/> <br />
                    {formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : null} 
                </div>
                <div className="flex-item">
                    <input type="password" name="password" placeholder="enter the password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}/> <br />
                    {formik.touched.password && formik.errors.password ? <small>{formik.errors.password}</small> : null} 
                </div>
                <input className="btn" type="submit" />
            </form>
            <hr />
            <div className="bottom-text">
                <p>Have an account?</p> &nbsp; 
                <Link style={{textDecoration:'none'}} to="/">Login</Link>   
            </div>
        </div>
    )
}

export default Register
