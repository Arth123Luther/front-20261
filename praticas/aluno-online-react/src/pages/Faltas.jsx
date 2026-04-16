import './Faltas.css';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TabelaFaltas from "../components/TabelaFaltas";

function Faltas() {
    return (
        <div className="faltas-wrapper">
            <Sidebar />
            <main>
                <Topbar />
                <h2>Histórico de Faltas por Semestre</h2>
                <TabelaFaltas />
            </main>
        </div>
    );
}

export default Faltas;