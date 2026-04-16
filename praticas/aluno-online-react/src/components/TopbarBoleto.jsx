import './Topbar.css';
import user from '../assets/avatar.svg';

function TopbarBoleto() {
    return (
        <header>
            <h1>Meus Boletos</h1>
            <img src={user} alt="imagem avatar" />
        </header>
    );
}

export default TopbarBoleto;