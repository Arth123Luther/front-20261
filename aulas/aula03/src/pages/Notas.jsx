import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Main from "../components/Main";

function Notas() {
    return (
        <>
            <Sidebar />
            <Main titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
                    <Tabela titulo="2026.1" />
                    <Tabela titulo="2025.2" />
                    <Tabela titulo="2025.1" />
            </Main>
        </>
    );
}

export default Notas;