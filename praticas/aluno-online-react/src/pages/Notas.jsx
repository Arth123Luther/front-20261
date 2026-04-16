import './Notas.css';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas() {
    return (
        <div className="notas-wrapper">
            <Sidebar />
            <main>
                <Topbar />
                <h2>Minhas Notas</h2>
            </main>
        </div>
    );
}

export default Notas;