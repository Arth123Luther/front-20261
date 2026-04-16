import './Faltas.css';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Tabela from "../components/Tabela";

function Faltas() {
    return (
        <div className="faltas-wrapper">
            <Sidebar />
            <main>
                <Topbar />
                <h2>Histórico de Faltas por Semestre</h2>
                <Tabela />
            </main>
        </div>
    );
}

export default Faltas;