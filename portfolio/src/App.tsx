import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
function App(){
  return (
    <div className="border border-black w-full h-screen mx-auto">
      <Navbar/>
      <Home/>
      <TechStack/>
      <Projects/>
    </div>
  )
}
export default App;