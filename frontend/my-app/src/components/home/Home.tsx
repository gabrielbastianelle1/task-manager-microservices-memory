import { useEffect, useState } from "react";
import Task from "../task/Task";
import TaskForm from "../task/TaskForm";
import ITask from "@/model/ITask";
import axios from "axios";
import getSessionStorageValue from "@/utils/getSessionStorageValue";

export default function Home() {
    const [tasks, setTasks] = useState<ITask[] | null>(null);
    const [idUser, setUserId] = useState<string | null>("");

    useEffect(() => {
        getSessionStorageValue("idUser").then((response) => {
            setUserId(response);
            console.log(response);
            axios
                .get(`http://myapp.com/api/task/find-all-by-userid/${response}`)
                .then((response) => {
                    setTasks(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }, []);

    return (
        <main className="flex flex-col gap-y-8  flex-grow bg-slate-100  p-8 relative">
            <TaskForm idUser={idUser} />
            {tasks == null ? (
                <div>loading</div>
            ) : tasks.length === 0 ? (
                <div>no tasks</div>
            ) : (
                tasks.map((task, index) => {
                    return <Task key={task.id} task={task.task} />;
                })
            )}
        </main>
    );
}
