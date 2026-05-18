import { createContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState(null);

    function login(dados) {
        setUsuario(dados);
        setAutenticado(true);
    }

    function logout() {
        setUsuario(null);
        setAutenticado(false);
    }

    return (
        <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider}