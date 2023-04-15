import axios from "axios";
import { useState } from "react";
interface Props {
    idUser: string | null;
}

export default function TaskForm({ idUser }: Props) {
    const [formData, setFormData] = useState<{
        task: string;
        idUser: string | null;
    }>({
        task: "",
        idUser: idUser,
    });

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios
            .post(`http://myapp.com/api/task/save-task/${formData.idUser})}`, {
                task: formData.task,
            })
            .then((response) => console.log(response))
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
                onChange={(event) =>
                    setFormData({ ...formData, task: event.target.value })
                }
            />
            <button type="submit" className="button-default font-bold">
                send
            </button>
        </form>
    );
}
