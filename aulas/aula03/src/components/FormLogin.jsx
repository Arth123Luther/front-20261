import InputMatricula from "./InputMatricula";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit";
import { useState } from "react";

function FormLogin({ navegaPara }) {
    const [matricula, setMatricula] = useState();
    const [senha, setSenha] = useState();
    const [matriculaErro, setMatriculaErro] = useState();
    const [senhaErro, setSenhaErro] = useState();

    const travaSubmit = (e) => {
        e.preventDefault();
        if (!matricula) {
            setMatriculaErro('Matricula é obrigatória');
        }
        if (!senha) {
            setSenhaErro('Senha é obrigatória');
        }
        navegaPara(1);
    }

    return (
    <form onSubmit={travaSubmit}>
        <InputMatricula 
            matricula={matricula}
            erro={matriculaErro}
            mudaValor={(e) => setMatricula(e.target.value)}
        />
        <InputSenha 
            senha={senha}
            erro={senhaErro}
            mudaValor={(e) => setSenha(e.target.value)}
        />
        <InputSubmit 
            texto="Entrar"
        />
    </form>
    );
}

export default FormLogin;