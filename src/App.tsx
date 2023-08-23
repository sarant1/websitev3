import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-black font-spartan">
      <div className="mx-auto max-w-screen-xl border-solid border-x border-blue">
        <Navbar />
        <Landing />
        <Certifications />
      </div>
    </div>
  );
}

export default App;
