import './TabelaNotas.css';

function TabelaNotas() {
    return (
        <section className="notas-section">

            <div className="notas-card">
                <h3>2026.1</h3>
                <table className="notas-table">
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>A1</th>
                            <th>A2</th>
                            <th>A3</th>
                            <th>Menção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BI e Data Warehousing</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>SR</td>
                        </tr>
                        <tr>
                            <td>Construção de Frontend</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>SR</td>
                        </tr>
                        <tr>
                            <td>Manutenção de Software e Devops</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>SR</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="notas-card">
                <h3>2025.2</h3>
                <table className="notas-table">
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>A1</th>
                            <th>A2</th>
                            <th>A3</th>
                            <th>Menção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Construção de Backend</td>
                            <td>5.4</td>
                            <td>6.2</td>
                            <td></td>
                            <td>MM</td>
                        </tr>
                        <tr>
                            <td>Estrutura de Dados</td>
                            <td>6.3</td>
                            <td>6.1</td>
                            <td></td>
                            <td>MM</td>
                        </tr>
                        <tr>
                            <td>Gerenciamento de Projetos</td>
                            <td>7.4</td>
                            <td>7.1</td>
                            <td></td>
                            <td>MS</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="notas-card">
                <h3>2025.1</h3>
                <table className="notas-table">
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>A1</th>
                            <th>A2</th>
                            <th>A3</th>
                            <th>Menção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Construção de Frontend</td>
                            <td>8.0</td>
                            <td>7.5</td>
                            <td></td>
                            <td>MS</td>
                        </tr>
                        <tr>
                            <td>Estrutura de Dados</td>
                            <td>7.0</td>
                            <td>6.5</td>
                            <td></td>
                            <td>MM</td>
                        </tr>
                        <tr>
                            <td>Programação Orientada a Objetos</td>
                            <td>9.0</td>
                            <td>8.5</td>
                            <td></td>
                            <td>SS</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    );
}

export default TabelaNotas;