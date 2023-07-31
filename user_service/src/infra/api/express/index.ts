import express from "express";
import cors from "cors";
import router from "./route/route";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log("user service running in port 3000!");
});
