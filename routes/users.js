const express = require("express");

const router = express.Router();

// log a user out
router.get("/logout",(req,res) => {
    req.logout();
    res.redirect("/");
});