import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState<string>("");

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        axios.post("http://myapp.com/api/task");
    };

    return (
        <main className="min-h-screen w-screen md:flex md:justify-center ">
            <form
                onSubmit={onSubmitForm}
                className="md:border md:shadow-md container m-auto p-10 rounded"
            >
                <div className="grid mb-6 ">
                    <div className="space-y-5">
                        <label className="text-xl font-medium text-gray-900 dark:text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            className="input-text"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                </div>
                <div className="md:space-x-5 space-y-5">
                    <button type="button" className="button-default">
                        Create Account
                    </button>
                    <Link href="/" className="button-light">
                        Back
                    </Link>
                </div>
            </form>
        </main>
    );
}
