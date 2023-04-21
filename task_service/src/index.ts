import express from "express";
import router from "./route/route";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log("task service running in port 3000");
});
