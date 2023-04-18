import ITask from "@/model/ITask";
import axios from "axios";
import DeleteModal from "../modal/DeleteModal";
import { useState } from "react";

type Props = {
    task: ITask;
    refreshTasks: () => void;
};

export default function Task({ task, refreshTasks }: Props) {
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    function completeTask(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        axios
            .put(`http://myapp.com/api/task/set-task-done/${task.id}`)
            .then((response) => {
                setIsDeleted(true);
                setTimeout(() => {
                    console.log("asdas");
                    refreshTasks();
                }, 500);
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            {deleteModal && (
                <DeleteModal
                    id={task.id}
                    setDeleteModal={setDeleteModal}
                    refreshTasks={refreshTasks}
                    setIsDeleted={setIsDeleted}
                />
            )}

            <div
                className={`flex items-center w-full p-8 bg-white rounded-xl justify-between gap-4 transition-all duration-500 ${
                    isDeleted ? "opacity-0 translate-x-full" : ""
                } `}
            >
                <p className="flex-grow whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {task.task}
                </p>
                <span className="space-x-2 min-w-max">
                    <button
                        onClick={completeTask}
                        className="button-green-borded"
                    >
                        Complete
                    </button>
                    <button
                        onClick={() => setDeleteModal(true)}
                        className="button-red-borded"
                    >
                        Delete
                    </button>
                </span>
            </div>
        </>
    );
}
