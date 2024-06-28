import React from "react";
import { isAuthenticated, signout } from "../../backend.js";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigation
  const authenticatedUser = isAuthenticated(); // Check if the user is authenticated

  // // Function to handle signout action
  // const onSignout = () => {
  //   signout(); // Perform signout action
  //   console.log("Signed out");
  //   navigate("/signin"); // Redirect to login page after sign out
  // };
  const onSignout = () => {
    signout(() => {
    // Pass a callback function to signout
    console.log("Signed out");
    navigate("/signin"); // Redirect to login page after sign out
  });

  return !authenticatedUser ? (
    <h1>Please sign in</h1>
  ) : (
    <div className="dashboard">
      <button onClick={onSignout}>Sign Out</button>
      <h1>Hello, {authenticatedUser.user.name}</h1> {/* Display user's name */}
    </div>
  );
};

export default Dashboard;
