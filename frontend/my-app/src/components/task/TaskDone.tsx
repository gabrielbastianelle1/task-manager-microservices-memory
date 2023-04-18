import ITask from "@/model/ITask";

type Props = {
    task: ITask;
};

export default function TaskDone({ task }: Props) {
    return (
        <>
            <div
                className={`flex items-center w-full p-8 bg-white rounded-xl justify-between gap-4 transition-all duration-500`}
            >
                <p className="flex-grow whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {task.task}
                </p>
                <span className="space-x-2 min-w-max">{task.dateDone}</span>
            </div>
        </>
    );
}
