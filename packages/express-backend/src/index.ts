// src/index.ts
import profiles from "./profiles";
import { Profile } from "ts-models";
import express, { Request, Response } from "express";
import cors from "cors";
import * as path from "path";
import { PathLike } from "node:fs";
import { loginUser, registerUser } from "./auth";
import apiRouter from "./routes/api";

// in src/index.ts
// add this import near the top
import { connect } from "./mongoConnect";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// and add this after all the app.use() statements
connect("Bobateadog"); // use your own db name here

const frontend = "lit-frontend";
let cwd = process.cwd();
let dist: PathLike | undefined;
let indexHtml: PathLike | undefined;

try {
  console.log("hello");
  indexHtml = require.resolve(frontend);
  dist = path.dirname(indexHtml.toString());
} catch (error: any) {
  console.log(`Could not resolve ${frontend}:`, error.code);
  dist = path.resolve(cwd, "..", frontend, "dist");
  indexHtml = path.resolve(dist, "index.html");
}




app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});



app.post("/login", loginUser);
app.post("/signup", registerUser);
app.use("/api", apiRouter);
// in src/index.ts, after our previous routes
app.put("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newProfile = req.body;

  profiles
    .update(userid, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
