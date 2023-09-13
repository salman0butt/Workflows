const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const workflowRoutes = require("./routes/workflowRoutes");
const nodeRoutes = require("./routes/nodeRoutes");

const app = express();
const port = process.env.PORT || 3001;

async function DbConnect() {
   try {
      // Connect to MongoDB
        await mongoose.connect("mongodb://127.0.0.1:27017/workflows", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
}

DbConnect();

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const corsOptions = {
  credentials: false,
  origin: ['http://localhost:5173']
}

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
