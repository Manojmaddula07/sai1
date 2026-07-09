const express = require('express');
const app = express();

app.post("/post1", (req, res) => {
    res.json({message: "Post1 Api requested"});
})

app.get("/get1", (req, res) => {
    res.json({message: "Get1 Api requested"});
})

app.put("/put1", (req, res) => {
    res.json({message: "Put1 Api requested"});
})

app.delete("/delete1", (req, res) => {
    res.json({message: "Delete1 Api requested"});
})

app.listen(3000, () => {
    console.log("Server is runing at http://localhost:3000")
});