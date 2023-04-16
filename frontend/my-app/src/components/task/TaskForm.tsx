import axios from "axios";
import { useEffect, useState } from "react";

interface TaskFormProps {
    refreshTasks: () => void;
}

export default function TaskForm(props: TaskFormProps) {
    const [task, setTask] = useState<string>("");

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios
            .post(
                `http://myapp.com/api/task/save-task/${sessionStorage.getItem(
                    "idUser"
                )}`,
                {
                    task: task,
                }
            )
            .then((response) => {
                console.log(response);
                props.refreshTasks();
            })
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={onSubmitForm}
            className="sticky inset-0 w-full p-8 bg-white rounded-xl space-y-5"
        >
            <label className="block mb-2 font-bold text-gray-900 dark:text-white">
                New Task
            </label>
            <textarea
                rows={2}
                className="input-text resize-none"
                onChange={(event) => setTask(event.target.value)}
            />
            <button type="submit" className="button-default font-bold">
                send
            </button>
        </form>
    );
}
