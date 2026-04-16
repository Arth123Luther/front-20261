import './Topbar.css';
import user from '../assets/avatar.svg';

function TopbarRequerimento() {
    return (
        <header>
            <h1>Meus Requerimentos</h1>
            <img src={user} alt="imagem avatar" />
        </header>
    );
}

export default TopbarRequerimento;