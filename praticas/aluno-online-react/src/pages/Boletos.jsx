import './Boletos.css';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TabelaBoletos from "../components/Tabelaboletos";

function Boletos() {
    return (
        <div className="boletos-wrapper">
            <Sidebar />
            <main>
                <Topbar />
                <h2>Meus Boletos</h2>
                <TabelaBoletos />
            </main>
        </div>
    );
}

export default Boletos;