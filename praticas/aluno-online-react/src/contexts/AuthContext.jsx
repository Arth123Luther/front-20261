import { createContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(() => {
        return localStorage.getItem("autenticado") === "true";
    });
    
    const [usuario, setUsuario] = useState(() => {
        const salvo = localStorage.getItem("usuario");
        return salvo ? JSON.parse(salvo) : null;
    });

    function login(dados) {
        localStorage.setItem("autenticado", "true");
        localStorage.setItem("usuario", JSON.stringify(dados));
        
        setUsuario(dados);
        setAutenticado(true);
    }

    function logout() {
        localStorage.removeItem("autenticado");
        localStorage.removeItem("usuario");
        
        setUsuario(null);
        setAutenticado(false);
    }

    return (
        <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };