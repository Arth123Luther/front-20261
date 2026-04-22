import './Faltas.css';
import Sidebar from "../components/Sidebar";
import TopbarFalta from "../components/TopbarFalta";
import TabelaFaltas from "../components/TabelaFaltas";

function Faltas() {
    return (
        <div className="faltas-wrapper">
            <Sidebar />
            <main>
                <TopbarFalta />
                <h2>Histórico de Faltas por Semestre</h2>
                <TabelaFaltas />
            </main>
        </div>
    );
}

export default Faltas;