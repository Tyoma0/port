import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Work } from './layout/sections/work/Work';
import { Skill } from './layout/sections/skill/Skill';
import { Footer } from './layout/footer/Footer';
import { Experience } from './layout/sections/experience/Experience';
import { Particle } from './components/Particle';
import { GoTopBtn } from './components/goTopBtn/goTopBtn';
import { Contact } from './layout/sections/contact/Contact';

function App() {
    return (
        <div className="App">
            <Particle />
        <Header/>
        <Main/>
        <Work/>
        <Skill />
        <Experience />
        <Contact />
        <Footer />
        <GoTopBtn />
        </div>
    );
}

export default App;
