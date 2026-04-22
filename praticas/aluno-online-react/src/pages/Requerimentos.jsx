import './Requerimentos.css';
import Sidebar from "../components/Sidebar";
import TopbarRequerimento from "../components/TopbarRequerimento";
import TabelaRequerimentos from "../components/TabelaRequerimento";

function Requerimentos() {
    return (
        <div className="requerimentos-wrapper">
            <Sidebar />
            <main>
                <TopbarRequerimento />
                <h2>Faça solicitações online para a secretaria</h2>
                <TabelaRequerimentos />
            </main>
        </div>
    );
}

export default Requerimentos;