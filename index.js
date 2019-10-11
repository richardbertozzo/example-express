const express = require("express");

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    res.status(200).send("OLOCO MEU - THIS IS A REAL GET");
});

app.get("/test", (req, res) => {
    res.status(200).send("THIS ANOTHER GET");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
