import './Topbar.css';
import user from '../assets/avatar.svg';

function TopbarFaltas() {
    return (
        <header>
            <h1>Minhas Faltas</h1>
            <img src={user} alt="imagem avatar" />
        </header>
    );
}

export default TopbarFaltas;