const express = require("express");
const app = express();

app.get('/', (req,res) => {
    console.log("Processing get request...");
    res.json({"test": "success"})
});

app.listen(3000, () => {
    console.log("listening...");
})