import Task from "../task/Task";

export default function Home() {
    return (
        <main className="flex flex-col gap-y-8  flex-grow bg-slate-100  p-8 relative">
            <form className="sticky inset-0 w-full p-8 bg-white rounded-xl space-y-5">
                <label className="block mb-2 font-bold text-gray-900 dark:text-white">
                    New Task
                </label>
                <textarea rows={2} className="input-text resize-none" />
                <button className="button-default font-bold">send</button>
            </form>
            <Task task={"tito"} />
        </main>
    );
}
