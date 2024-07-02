//Importing necessary modules and models
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Authroute = require("./routes/authRoute");
dotenv.config();

// const corsOptions = {
//   origin: ["http://localhost:3000", "https://ros-mon.vercel.app"],
//   methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE", "OPTIONS"],
//   allowedHeaders: [
//     "X-CSRF-Token",
//     "X-Requested-With",
//     "Accept",
//     "Accept-Version",
//     "Content-Length",
//     "Content-MD5",
//     "Content-Type",
//     "Date",
//     "X-Api-Version",
//   ],
//   credentials: true, // enable set cookie
// };

// app.use(cors(corsOptions));
// // Ensure OPTIONS requests are handled properly
// app.options("*", cors(corsOptions));

app.use(cors());

// Database Connection
// Replace <username>, <password>, <cluster>, and <dbname> with your MongoDB Atlas credentials.
mongoose
  .connect(
    //"mongodb+srv://<username>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority"
    process.env.ATLAS_URI
  )
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database connection failed", err));
// Starting the Application
const port = 8000;
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});

// Middleware Configuration
// Body-parser to parse incoming request bodies as JSON
app.use(bodyParser.json());
// Cookie-parser for handling cookies
app.use(cookieParser());

console.log("Middleware Configured");

// // CORS for enabling Cross-Origin Resource Sharing -- used the other corsOption
// app.use(cors());

// Routing
// Mounting authentication-related routes under the '/api' endpoint
app.use("/api", Authroute);
console.log("Mounted auth routes");

//Adding a route, where we use Express app to listen for a
//get request at the path '/' which is root or homepage
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from our server!" }); //usually sends JSON object or array of data
});
