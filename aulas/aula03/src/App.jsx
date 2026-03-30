import logo from './assets/chapeu.svg';
import user from './assets/avatar.svg';

function App() {

  return <div className='flex flex-col md:flex-row'>
    <aside className='hidden md:block bg-gray-300'>
      <header className='flex flex-row'>
        <img src={logo} alt="imagem logo" />
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
    <main className='flex flex-col max-w-screen'>
      <header>
        <h1>Olá, Aluno!</h1>
        <img src={user} alt="imagem avatar" />
      </header>
      <h2>Bem-vindo ao portal do aluno</h2>
      <section>
        <article>
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante da turma</li>
          </ul>
        </article>
        <article>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li>23/02 - Início do período letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo 2026-1</li>
          </ul>
        </article>
        <article>
          <h3>Minhas Disciplinas</h3>
          <ul>
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
            <li>Desenvolvimento de Backend</li>
          </ul>
        </article>
      </section>
    </main>
  </div>
}

export default App;