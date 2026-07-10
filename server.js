const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');


dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Notes app");
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on the PORT ${PORT}`);
})
