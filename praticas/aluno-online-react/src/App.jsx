import { Routes, Route } from 'react-router';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
      </Route>
    </Routes>
  );
}

export default App;