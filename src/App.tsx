import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import SendMessage from "./components/SendMessage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black font-spartan font-light">
      <div className="mx-auto max-w-screen-xl border-solid border-x border-blue">
        <Navbar />
        <Landing />
        <Certifications />
        <Projects />
        <SendMessage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
