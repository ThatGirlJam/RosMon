//Code from tutorial https://medium.com/@sanjanashivananda07/mastering-user-authentication-building-a-simple-login-page-using-mern-stack-part-2-frontend-ad6602f7351d
import axios from "axios";

//USER AND AUTH ROUTES

// Determine base URL based on environment
const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api"
    : `${process.env.REACT_APP_SERVER_URL}/api`;

// Function to perform a GET request to the server URL
export const testServerURL = () => {
  return axios
    .get(API_BASE_URL) // Perform GET request to server URL
    .then((response) => {
      console.log("Server Response:", response.data); // Log server response data
      return response.data; // Return server response data
    })
    .catch((err) => {
      console.error("Error fetching server data:", err); // Log error if GET request fails
      throw err; // Throw error to handle it elsewhere if needed
    });
};

//SIGNIN
export const signin = (user) => {
  // API call to sign in a user
  return axios
    .post(`${API_BASE_URL}/signin`, JSON.stringify(user), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include", // Important for cookies to be sent
    })
    .then((response) => {
      return response.data; // Return response data
    })
    .catch((err) => {
      return err.response.data; // Return error response data
    });
};

//SIGNUP
export const signup = (user) => {
  // API call to sign up a user
  return axios
    .post(`${API_BASE_URL}/signup`, JSON.stringify(user), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include", // Important for cookies to be sent
    })
    .then((response) => {
      console.log(response.data);
      return response.data; // Return response data
    })
    .catch((err) => {
      return err.response.data; // Return error response data
    });
};

//SETTING THE JWT TOKEN IN USER'S BROWSER
export const authenticate = (data, next) => {
  // Storing JWT token in user's browser
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

//SIGNOUT -> REMOVING JWT TOKEN
export const signout = (next) => {
  // Removing JWT token upon signout
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");

    axios
      .get(`${API_BASE_URL}/signout`)
      .then((response) => {
        console.log(response.data);
        next();
      })
      .catch((err) => console.log(err));
  }
};

//VALIDATION IF USER IS SIGNED IN
export const isAuthenticated = () => {
  // Checking if the user is authenticated
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt"))
    return JSON.parse(localStorage.getItem("jwt"));
  else return false;
};
