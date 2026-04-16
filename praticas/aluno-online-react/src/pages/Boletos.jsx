import './Boletos.css';
import Sidebar from "../components/Sidebar";
import TopbarBoleto from "../components/TopbarBoleto";
import TabelaBoletos from "../components/Tabelaboletos";

function Boletos() {
    return (
        <div className="boletos-wrapper">
            <Sidebar />
            <main>
                <TopbarBoleto />
                <h2>Histórico de Pagamentos</h2>
                <TabelaBoletos />
            </main>
        </div>
    );
}

export default Boletos;