const express = require("express");
const app = express();

app.get('/', (req,res) => {
    console.log("Processing get request...");
    res.json({"test": "success"})
});

app.listen(80, () => {
    console.log("listening...");
})
