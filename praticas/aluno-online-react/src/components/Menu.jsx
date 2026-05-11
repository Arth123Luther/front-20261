import './Menu.css';
import { Link, NavLink } from 'react-router';

function Menu() {
    const linkClass = ({ isActive }) =>
        `text-[#303030] no-underline px-2 py-2 block font-semibold text-lg ${isActive ? 'active' : ''}`;

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
                    <Link className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" to="/login">
                        Sair
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;