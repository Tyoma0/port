import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Work } from './layout/sections/work/Work';
import { Skill } from './layout/sections/skill/Skill';
import { Footer } from './layout/footer/Footer';
import { Experience } from './layout/sections/experience/Experience';


function App() {
    return (
        <div className="App">
            
           <Header/>
           <Main/>
           <Work/>
           <Skill />
           <Experience />
           <Footer />
        </div>
    );
}

export default App;
