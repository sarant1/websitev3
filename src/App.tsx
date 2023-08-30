import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import SendMessage from "./components/SendMessage";

function App() {
  return (
    <div className="bg-black font-spartan">
      <div className="mx-auto max-w-screen-xl border-solid border-x border-blue">
        <Navbar />
        <Landing />
        <Certifications />
        <Projects />
        <SendMessage />
      </div>
    </div>
  );
}

export default App;
