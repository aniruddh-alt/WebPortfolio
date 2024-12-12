import {useState} from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import TechStack from './Components/Techstack';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  const [gradient, setGradient] = useState('from-gray-900 to-gray-800');
  return (
    <div className={`App bg-gradient-to-r ${gradient} min-h-screen`}>
      <Header />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
