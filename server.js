const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Notes app");
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on the PORT ${PORT}`);
})
