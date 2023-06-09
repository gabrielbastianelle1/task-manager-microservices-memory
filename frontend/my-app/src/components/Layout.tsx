import Sidebar from "./sidebar/Sidebar";
import Rightbar from "./rightbar/Rightbar";
import Home from "./home/Home";

export default function Layout() {
    return (
        <main className="flex">
            <Sidebar />
            <Home />
            <Rightbar />
        </main>
    );
}
