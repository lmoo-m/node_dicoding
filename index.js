import express from "express";
import db from "./config/database.js";
import router from "./routes/route.js";

const app = express();

try {
    db.authenticate();
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use("/", router);

app.listen(9000, () => console.log("server runn in port 9000"));
