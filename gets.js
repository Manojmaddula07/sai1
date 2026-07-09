const express = require('express');
const app = express();
app.use(express.json());
app.get("/alldata", (req, res) => {
    //const variable name = query
    //res.json(variable_name)
})
app.get("/sdata/:id", (req, res) => {
    //const variable name = query
    //res.json(variable_name)
})
app.delete("/delete2/:id", (req, res) => {
    //const variable name = query
    //res.json(variable_name)
})

app.listen(3003, () => {
    console.log("Server is running at http://localhost:3003");
})