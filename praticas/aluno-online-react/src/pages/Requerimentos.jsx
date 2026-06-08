import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Main from "../components/Main";
import Tabela from "../components/Tabela";
import { listar } from "../services/requerimentoService.js";

function Requerimentos() {
    const navigate = useNavigate();
    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function carregar() {
            const lista = await listar();

        const dadosFormatados = lista.map(item => [
            item.tipo,
            item.data,
            item.status || "Pendente"
        ]);

        setDados(dadosFormatados);
        };
    carregar();
    }, []);

    const colunas = [
        "Tipo de Requerimento",
        "Data de Solicitação",
        "Situação"];

    return (
        <Main titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria">
            <button
                className="self-start items-center gap-2 bg-[#303030] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#555] transition-colors cursor-pointer"
                onClick={() => navigate("/requerimentos/novo")}
            >
                ➕ Novo Requerimento
            </button>
            <Tabela colunas={colunas} dados={dados} />
        </Main>
    );
}

export default Requerimentos;