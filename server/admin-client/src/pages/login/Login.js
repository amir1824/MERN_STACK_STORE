import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/auth-context'
import './Login.scss'


const Login = ({ history }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {dispatch} =  useContext(AuthContext)
    const Navigate = useNavigate()


    const loginHandler = async (e) => {
        e.preventDefault();
       


        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                "http://localhost:8000/api/v1/users/login",
                { email, password },

                config
            );
            dispatch({ type: "LOGIN_SUCCESS"});


            dispatch({ type: "LOGIN_SUCCESS" ,payload: data.token});
            Navigate('/home'); 

            console.log(data.token)




        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);


        }


    }


    return (

        <div className="container1">
            <div className="form" >
                <h3 className="h1">Login</h3>
                {error && <span className="error-message">{error}</span>}
                <form onSubmit={loginHandler} className="login-form">

                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        tabIndex={1}
                        required
                    />
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        autoComplete='true'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        tabIndex={2}
                        required
                    />
                    <button type="submit" className="btn">Login</button>
                </form>
                <p className="h1">
                    <a href='forgotpassword'>  Forgot Password?</a>
                </p>

            </div>

        </div>


    )


}
export default Login
