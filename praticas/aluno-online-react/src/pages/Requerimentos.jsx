import './Requerimentos.css';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TabelaRequerimentos from "../components/TabelaRequerimento";

function Requerimentos() {
    return (
        <div className="requerimentos-wrapper">
            <Sidebar />
            <main>
                <Topbar />
                <h2>Meus Requerimentos</h2>
                <h3>Faça solicitações online para a secretaria</h3>
                <TabelaRequerimentos />
            </main>
        </div>
    );
}

export default Requerimentos;