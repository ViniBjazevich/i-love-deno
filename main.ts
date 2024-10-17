// @deno-types="npm:@types/express@4.17.15"
import express, { Request, Response } from "npm:express@4.18.2";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from Deno with Express!");
});

app.get("/penguin", (_req: Request, res: Response) => {
  res.send("Waddle waddle!");
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
