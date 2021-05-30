import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
    <Particles
    className="particles"
    params={{
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
          }
        }
      }
    }}
    />
    <Navbar/>
    <Header/>
    </>
  );
}

export default App;
