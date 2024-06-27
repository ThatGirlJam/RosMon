import React from "react";

// Signin component for the login form
export function Signin() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Signin</h2>
        {/* Input fields for email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        {/* Input fields for password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        {/* Log in button */}
        <div className="form-group-button">
          <button>Log in</button>
        </div>
        {/* Message for redirection to signup */}
        <div className="login-message">
          <center>
            <p className="login_redirect mt-2">
              Don't have an account?
              <b>
                <a href="/signup"> Signup here</a>
              </b>
            </p>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Signin;
