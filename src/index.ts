import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const port = 5000;

const expressServer = createServer(app);
const io = new Server(expressServer);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
