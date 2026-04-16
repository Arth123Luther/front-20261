import './Requerimentos.css';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos() {
    return (
        <div className="requerimentos-wrapper">
            <Sidebar />
            <main>
                <Topbar />
                <h2>Meus Requerimentos</h2>
                <section></section>
            </main>
        </div>
    );
}

export default Requerimentos;