import './Menu.css';
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function Menu() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const linkClass = ({ isActive }) =>
        `text-[#303030] no-underline px-2 py-2 block font-semibold text-lg ${isActive ? 'active' : ''}`;

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav>
            <ul className="list-outside pl-5 m-0">
                <li className="list-disc my-4 ml-4">
                    <NavLink className={linkClass} to="/" end>
                        Dashboard
                    </NavLink>
                </li>
                <li className="list-disc my-4 ml-4">
                    <NavLink className={linkClass} to="/notas">Notas</NavLink>
                </li>
                <li className="list-disc my-4 ml-4">
                    <NavLink className={linkClass} to="/faltas">Faltas</NavLink>
                </li>
                <li className="list-disc my-4 ml-4">
                    <NavLink className={linkClass} to="/boletos">Boletos</NavLink>
                </li>
                <li className="list-disc my-4 ml-4">
                    <NavLink className={linkClass} to="/requerimentos">Requerimentos</NavLink>
                </li>
                <li className="list-disc my-4 ml-4">
                    <button
                        onClick={handleLogout}
                        className="text-[#303030] px-2 py-2 block font-semibold text-lg cursor-pointer bg-transparent border-none w-full text-left"
                    >
                        Sair
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;