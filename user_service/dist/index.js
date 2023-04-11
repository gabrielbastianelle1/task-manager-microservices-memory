"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const users = [
    { id: 1, name: "gabriel" },
    { id: 2, name: "kasia" }
];
app.get("/", (req, res) => {
    res.json(users);
});
app.post("/signup", (req, res) => {
    let user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
});
app.post("/signin", (req, res) => {
    const filtered = users.filter((user) => user.name === req.body.name);
    if (filtered.length === 0) {
        res.status(404).json({
            msg: "user not found"
        });
        return;
    }
    res.json(filtered[0]);
});
app.listen(3000, () => {
    console.log("user service running in port 3000");
});
//# sourceMappingURL=index.js.map