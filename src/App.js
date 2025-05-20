import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer.jsx';
import Home from './views/Home';
import Personajes from './views/Personajes.jsx';
import Juegos from './views/Juegos.jsx';
import Contacto from './views/Contacto.jsx';
import Consolas from './views/Consolas.jsx';
import Historia from './views/Historia.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/consolas" element={<Consolas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;