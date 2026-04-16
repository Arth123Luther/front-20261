import './Notas.css';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TabelaNotas from "../components/TabelaNotas";

function Notas() {
    return (
        <div className="notas-wrapper">
            <Sidebar />
            <main>
                <Topbar />
                <h2>Minhas Notas</h2>
                <TabelaNotas />
            </main>
        </div>
    );
}

export default Notas;