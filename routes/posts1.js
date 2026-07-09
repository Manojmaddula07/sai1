const express = require('express');
const router = express.Router();
const User = require("../model/user");

router.post("/post3", (req, res) => {
    const { name,age,email } = req.body;
    res.json({message: req.body});
})

router.post("/post4", (req, res) => {
    const {phno,address} = req.body;
    res.json({message: req.body});
})

router.post("/user/add",async(req,res)=>{
    const {name,age,email} = req.body;
    const user = new User({
        name,
        age,
        email
    })
   await user.save();
    res.json({message: "User added successfully"});
});

module.exports = router;
