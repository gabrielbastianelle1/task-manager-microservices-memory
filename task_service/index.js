const express = require("express");

const app = express();

const tasks = [
    { id: "1", idUser: "1", title: "Task 1" },
    { id: "2", idUser: "1", title: "Task 2" },
    { id: "3", idUser: "2", title: "Task 3" }
];

app.get("/", (req, res) => {
    res.send("<h1>task</h1>");
});

app.get("/tasks", (req, res) => {
    res.send(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const id = req.params.id;
    const filtered = tasks.filter((task) => task.idUser === id);
    if (!filtered) {
        res.send("task not found");
        return;
    }
    res.send(filtered);
});

app.listen(3000, () => {
    console.log("task service running in port 3000");
});
