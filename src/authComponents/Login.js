import { useEffect } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { startLoginUser, startRegisterUser } from '../actions/authActions'
import '../styles/authStyles/form-styling.css'

const Login = (props) => {
    const loggedIn = useSelector(state=>state.auth.login)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(loggedIn){
            props.history.push("/home")
        }
    },[loggedIn])

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            email:Yup.string().email('invalid email address').required('Email is required'),
            password:Yup.string().min(6, 'password must be atleast 6 characters').required('password is required')
        }),
        onSubmit:values=>{
            dispatch(startLoginUser(values))
        }
    })

    return (
        <div className="main-container">
            <h1>Login</h1>
            <form className="form-container" onSubmit={formik.handleSubmit}>
                <div className="flex-item">
                    <input type="text" name="email" placeholder="enter your email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}/> <br />
                    {formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : null }
                </div>
                <div className="flex-item">
                    <input type="password" name="password" placeholder="enter your password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}/> <br />
                    {formik.touched.password && formik.errors.password ? <small>{formik.errors.password}</small> : null}
                </div>
                <input className="btn" type="submit" value="login" />
            </form>
            <hr />
            <div className="bottom-text">
                <p>Don't have an account?</p> &nbsp; <Link style={{textDecoration:'none'}} to="/register">Register</Link>
            </div>

        </div>
    )
}

export default Login
