import React from "react";
import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import soccerBall from '../assets/soccer-ball.svg';



function AuthForm(){
    return (
        <div className="page-wrapper">
        <div className="auth-container">
            <div className="auth-left">
                <h2>Hello!</h2>
                <p>Please signup to continue</p>
        
                <label htmlFor="fullname">Full Name</label>
                <input type="Text" id="fullname" placeholder="Full Name"/>
               
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Email Address"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password"/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm Password"/>
                <button className="signup-btn">Sign Up</button>
                <p className="or-text">
                <span>or</span><br/>
                <span>Signup with</span>
                </p>
                <div className="social-buttons">
                     <button className="social facebook">
                     <FontAwesomeIcon icon={faFacebookF} />
                     </button>
                     <button className="social twitter">
                     <FontAwesomeIcon icon={faTwitter} />
                     </button>
                    </div>
                <p className="signin-link">I'm already a member! &nbsp; <a href="#">Sign In</a></p>
            </div>
            <div className="auth-right">
                <img src={soccerBall} alt="Soccer Ball" width="90" />
                <h1>Soccer Ball</h1>
                <p>Already have an account?</p>
                <button className="signin-btn">Sign In</button>
            </div>
        </div>
    </div>

    );
}
export default AuthForm;