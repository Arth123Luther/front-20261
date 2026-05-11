import { Routes, Route } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Settings from './pages/Settings';
import Erro404 from './pages/Erro404';
import Layout from './layouts/Layout';
import Login from './pages/Login';

function App() {
  return (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/settings" element={<Settings />} />
      <Route path='*' element={<Erro404 />} />
    </Route>
    <Route path="/login" element={<Login/>} />
  </Routes>
  );
}

export default App;