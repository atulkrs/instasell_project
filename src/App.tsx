import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import Hero from "./components/Hero";
import Feature1 from "./components/Feature1";
import Functionality1 from "./components/Functionality1";


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Feature1 />
      <Functionality1/>
      <div className='container'>
      </div>
    </>
  );
}

export default App;
