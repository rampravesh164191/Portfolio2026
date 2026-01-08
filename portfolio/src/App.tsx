import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/project";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
function App(){
  return (
    <div className="w-full h-screen mx-auto">
      <Navbar/>
      <Home/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <Project/>
    </div>
  )
}
export default App;