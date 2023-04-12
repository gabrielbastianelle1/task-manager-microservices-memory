interface Props {
    task: string;
}

export default function Task({ task }: Props) {
    return (
        <div className="flex items-center w-full p-8 bg-white rounded-xl justify-between">
            <p>{task}</p>
            <span className="space-x-2">
                <button type="button" className="button-yellow-borded">
                    Edit
                </button>
                <button type="button" className="button-red-borded">
                    Delete
                </button>
            </span>
        </div>
    );
}
