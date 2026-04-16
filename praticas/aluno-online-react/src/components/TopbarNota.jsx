import './Topbar.css';
import user from '../assets/avatar.svg';

function TopbarNotas() {
    return (
        <header>
            <h1>Minhas Notas</h1>
            <img src={user} alt="imagem avatar" />
        </header>
    );
}

export default TopbarNotas;