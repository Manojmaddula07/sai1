const express = require('express');
const app = express();
app.use(express.json());
app.put("/put2/:id", (req, res) => {
    const { name,age,email } = req.body;
    const id = req.params.id;
    res.json({message: req.body});
})

app.listen(3002, () => {
    console.log("Server is running at http://localhost:3002");
})