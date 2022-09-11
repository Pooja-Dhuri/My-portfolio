import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import About from './Componets/About';
import Skills from './Componets/Skills';
import Projects from './Componets/Projects';
import Footer from './Componets/Footer';
import Contects from './Componets/Contects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contects/>
     <Footer/>
    </div>
  );
}

export default App;
