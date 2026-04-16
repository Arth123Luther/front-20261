import './Tabela.css';

function Tabela() {
    return (
        <section className="tabela-section">
            <article>
                <h3>2026.1</h3>
                <ul>
                    <li>Disciplina | Total de Faltas | % de Presença</li>
                    <li>BI e Data Warehousing | 0 | 100%</li>
                    <li>Construção de Frontend | 0 | 100%</li>
                    <li>Manutenção de Software e Devops | 0 | 100%</li>
                </ul>
            </article>
            <article>
                <h3>2025.2</h3>
                <ul>
                    <li>Disciplina | Total de Faltas | % de Presença</li>
                    <li>Construção de Backend | 27 | 87,5%</li>
                    <li>Estrutura de Dados | 9 | 85%</li>
                    <li>Gerenciamento de Projetos | 10.5 | 82.5%</li>
                </ul>
            </article>
        </section>
    );
}

export default Tabela;