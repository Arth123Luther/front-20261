import './App.css';
import logo from './assets/learn.svg';

function App() {
  //JSX = JS + XML
  return (
    <main>
      <img src={logo} width="70" alt="Logotipo da aplicação" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matrícula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;