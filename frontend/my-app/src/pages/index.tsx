import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen w-screen md:flex md:justify-center ">
            <form className="md:border md:shadow-md container m-auto p-10 rounded">
                <div className="grid mb-6 ">
                    <div className="space-y-5">
                        <label className="text-xl font-medium text-gray-900 dark:text-white">
                            Name
                        </label>
                        <input type="text" className="input-text" />
                    </div>
                </div>
                <div className="md:space-x-5 space-y-5">
                    <button type="button" className="button-default">
                        Submit
                    </button>
                    <Link href="/signup" className="button-light">
                        Signup
                    </Link>
                </div>
            </form>
        </main>
    );
}
