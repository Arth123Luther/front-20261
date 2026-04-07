import Card from '../components/Card.jsx';
import Main from '../components/Main.jsx';
import Sidebar from '../components/Sidebar.jsx';


function Dashboard() {
    return (
        <>
            <Sidebar />
            <Main titulo="Olá, Aluno" subtitulo="Bem-vindo ao portal do aluno">
                <Card titulo="Mural do Aluno" />
                <Card titulo="Calendário Acadêmico" />
                <Card titulo="Minhas Disciplinas" />
            </Main>
        </>
    );
}

export default Dashboard;