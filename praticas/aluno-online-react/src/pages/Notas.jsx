import './Notas.css';
import Sidebar from "../components/Sidebar";
import TopbarNota from "../components/TopbarNota";
import TabelaNotas from "../components/TabelaNotas";

function Notas() {
    return (
        <div className="notas-wrapper">
            <Sidebar />
            <main>
                <TopbarNota />
                <h2>Histórico de Notas por Semestre</h2>
                <TabelaNotas />
            </main>
        </div>
    );
}

export default Notas;