import { Request, Response } from "express";
import tasks from "../fakedb/database";
import ITask from "../interface/ITask";
import { v4 as uuidv4 } from "uuid";

export function findAllTasks(req: Request, res: Response) {
    res.status(200).json(tasks);
}

export function findAllByUserId(req: Request, res: Response) {
    const id: string = req.params.id;
    const filtered: ITask[] = tasks.filter((task: ITask) => task.idUser === id);
    res.status(200).json(filtered);
}

export function saveTask(req: Request, res: Response) {
    const id: string = req.params.id;
    const { task } = req.body;

    const newTask: ITask = {
        id: uuidv4(),
        idUser: id,
        task: task
    };

    tasks.push(newTask);
    res.status(203).json(newTask);
}
