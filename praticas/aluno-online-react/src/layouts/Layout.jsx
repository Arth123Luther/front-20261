import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Layout() {
    return <>
        <Sidebar />
        <main className="ml-[300px]">
            <Outlet />
        </main>
    </>
}

export default Layout;