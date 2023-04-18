import { useEffect, useState } from "react";
import Task from "../task/Task";
import TaskForm from "../task/TaskForm";
import ITask from "@/model/ITask";
import axios from "axios";
import getSessionStorageValue from "@/utils/getSessionStorageValue";
import FilterDropdown from "../dropdown/FilterDropdown";
import TaskDone from "../task/TaskDone";

export default function Home() {
    const [tasks, setTasks] = useState<ITask[] | null>(null);
    const [idUser, setUserId] = useState<string | null>("");
    const [filtered, setFiltered] = useState<boolean>(false);

    useEffect(() => {
        getSessionStorageValue("idUser").then((response) => {
            setUserId(response);
            requestData(response);
        });
    }, [filtered]);

    function requestData(idUser: string | null) {
        axios
            .get(`http://myapp.com/api/task/find-all-by-userid/${idUser}`)
            .then((response) => {
                return filterTasksActives(response.data);
            })
            .then((response) => {
                setTasks(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    function refreshTasks() {
        console.log(filtered);
        requestData(idUser);
    }

    function filterTasksActives(tasks: ITask[]) {
        return tasks.filter((tasks) => tasks.done === filtered);
    }

    return (
        <main className="flex flex-col flex-grow w-0  gap-y-8   bg-slate-100  p-8 relative">
            <TaskForm refreshTasks={refreshTasks} />
            <FilterDropdown
                options={[
                    {
                        label: "active tasks",
                        value: false,
                    },
                    {
                        label: "completed tasks",
                        value: true,
                    },
                ]}
                setFiltered={setFiltered}
            />
            {tasks == null ? (
                <div>loading</div>
            ) : tasks.length === 0 ? (
                <div>no tasks</div>
            ) : (
                tasks.map((task) => {
                    if (filtered == false) {
                        return (
                            <Task
                                key={task.id}
                                task={task}
                                refreshTasks={refreshTasks}
                            />
                        );
                    }
                    return <TaskDone task={task} />;
                })
            )}
        </main>
    );
}
