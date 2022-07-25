import { useState } from "react";
import './ForgotPassword.scss'

import axios from "axios";



const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const forgotPasswordHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                "http://localhost:8000/api/v1/users/forgotPassword",
                { email },
                config
            );

            setSuccess(data.data);
        } catch (error) {
            setError(error.response.data.error);
            setEmail("");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
    return (
        <div className="container1">
            <form
                onSubmit={forgotPasswordHandler}
                className="form-forgot"
            >
                <h3 className="h1">Forgot Password</h3>
                {error && <span className="message">{error}</span>}
                {success && <span className="message">{success}</span>}
                
                <div  className="form-forgot">
                    <p className="h1">
                        Please enter the email address you register your account with. We
                        will send you reset password confirmation to this email.
                    </p>
                    
                    
                    <input
                        type="email"
                        required
                        id="email"
                        className="input"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                </div >
                <div className="form-forgot">
                <button type="submit" className="btn">
                    Send Email
                </button>
                </div>
                
            </form>
        </div>
    );
};



export default ForgotPassword