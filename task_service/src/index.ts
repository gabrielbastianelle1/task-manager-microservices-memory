import express from "express";
import router from "./route/route";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log("task service running in port 3000");
});
