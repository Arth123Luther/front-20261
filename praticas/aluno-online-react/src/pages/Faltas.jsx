import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Faltas() {
    const colunas = [
        "Disciplina",
        "Total de Faltas",
        "% de Presença"
    ]

    const dados = [
        [
            ["BI e Data Warehwousing", "0", "100%"],
            ["Construção de Frontend", "0", "100%"],
            ["Manuntenção de Software e Devops", "0", "100%"]
        ],
        [
            ["Construção de Backend", "27", "87.5%"],
            ["Estrutura de Dados", "9", "85%"],
            ["Gerenciamento de Projetos", "10.5", "82.5%"]
        ],
        [
            ["Engenharia de Software", "3", "95%"],
            ["Dispositivos Moveis", "10.5", "82.5%"],
            ["Estatística", "0", "100%"]
        ]
    ]

    return (
        <>
            <Sidebar />
            <Main titulo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre">
                <Tabela titulo="2026.1" colunas={colunas} dados={dados[0]}/>
                <Tabela titulo="2025.2" colunas={colunas} dados={dados[1]}/>
                <Tabela titulo="2025.1" colunas={colunas} dados={dados[2]}/>
            </Main>
        </>
    );
}

export default Faltas;