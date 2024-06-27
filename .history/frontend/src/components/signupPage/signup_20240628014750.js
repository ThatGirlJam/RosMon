import React from "react";

// Signup component for the signup form
function Signup() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Create an account</h2>
        {/* Input field for username */}
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" name="name" required />
        </div>
        {/* Input field for email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        {/* Input field for password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        {/* Signup button */}
        <div className="form-group-button">
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
