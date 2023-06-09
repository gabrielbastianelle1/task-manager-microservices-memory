import Alert from "@/components/Alert";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios
            .post("http://myapp.com/api/user/signup", {
                name: name,
            })
            .then((response) => console.log(response))
            .catch((error) => setError(error.response.data.msg));
    };

    return (
        <main className="min-h-screen w-screen md:flex md:justify-center ">
            <form
                onSubmit={onSubmitForm}
                className="md:border md:shadow-md container m-auto p-10 rounded"
            >
                {error !== "" ? <Alert>{error}</Alert> : null}
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
                    <button type="submit" className="button-default">
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
