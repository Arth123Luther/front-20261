import logo from "../assets/chapeu.svg";
import FormLogin from "../components/FormLogin";

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white rounded-lg p-10 w-full max-w-md border-2 border-[#e9e9e9]">
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Imagem da logo" className="w-20 h-20"/>
                </div>
                <h1 className="font-bold text-2xl text-center mb-8">Aluno Online</h1>
                <FormLogin /> {/* ← sem navegaPara */}
            </div>
            <footer className="mt-8 text-gray-600 text-sm">
                © 2026. Todos os direitos reservados.
            </footer>
        </div>
    );
}

export default Login;