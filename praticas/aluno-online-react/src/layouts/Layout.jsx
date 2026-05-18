import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Layout() {
    return <>
        <Sidebar />
        <main>
            <Outlet />
        </main>
    </>
}

export default Layout;