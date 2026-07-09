const express = require('express');
const app = express();
app.use(express.json());

const postRoutes = require("./routes/posts1");
const connectDB = require("./config/db");
app.use("/post1",postRoutes);
connectDB();





app.listen(3003, () => {
    console.log("Server is running at http://localhost:3003");
})