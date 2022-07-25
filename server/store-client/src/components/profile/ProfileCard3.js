import React from 'react'
import './Profile.css'

const ProfileCard3 = ()=>{

    return(
    
                <div className="resetpasswords-screen">
            <form
                
                className="resetpasswords-screen__form"
            >
                <h3 className="resetpasswords-screen__title">Reset Password</h3>
             

                <div className="form-group mt-3">
                    <label htmlFor="password">New Password:</label>
                    <input
                        type="password"
                        required
                        id="password"
                        className="form-control mt-1"
                        placeholder="Enter new password"
                        autoComplete="true"
                       
                     
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="confirmpassword">Confirm New Password:</label>
                    <input
                        type="password"
                        required
                        className="form-control mt-1"
                        id="confirmpassword"
                        placeholder="Confirm new password"
                        autoComplete="true"
                       
                  
                    />
                </div >
                <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                    Reset Password
                </button>
                </div>
            </form>
        </div>


                


    )

}

export default ProfileCard3