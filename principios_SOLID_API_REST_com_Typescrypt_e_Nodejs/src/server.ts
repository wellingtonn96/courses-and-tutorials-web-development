import express, { response } from "express";

import routes from "./routes/user.routes";

const app = express();

app.listen(3333, () => console.log("Web server running on port 3333"));
