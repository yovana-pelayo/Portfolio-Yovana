import About from './About/About';
import './App.css';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Gallery/>
    </div>
  );
}

export default App;
