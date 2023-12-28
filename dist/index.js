import express from "express";
import { createServer } from "http";
const app = express();
const port = 5000;
const expressServer = createServer(app);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
