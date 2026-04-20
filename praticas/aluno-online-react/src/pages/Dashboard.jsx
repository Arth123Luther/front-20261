import Card from '../components/Card.jsx';
import Main from '../components/Main.jsx';
import Sidebar from '../components/Sidebar.jsx';

function Dashboard() {
    const avisos = [
        "Eleição para representante da turma",
        "Inscrição para o projeto de extensão"
    ];

    const datas = [
        "23/02 - Início do período letivo 2026-1",
        "25/04 - Prazo final para aplicação da P1",
        "23/06 - Prazo final para aplicação da P2",
        "04/07 - Fim do período letivo 2026-1"
    ];

    const disciplinas = [
        "BI e Data Warehousing",
        "Construção de Frontend",
        "Manuntenção de Software e Devops"
    ];

    return (
        <>
            <Sidebar />
            <Main titulo="Olá, Aluno!" subtitulo="Bem-vindo ao portal do aluno">
                <Card titulo="Mural de Avisos" itens={avisos}/>
                <Card titulo="Calendário Acadêmico" itens={datas}/>
                <Card titulo="Minhas Disciplinas" itens={disciplinas}/>
            </Main>
        </>
    );
}

export default Dashboard;