import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="bg-black">
      <div className="h-screen mx-auto max-w-screen-xl border-solid border-x border-blue">
        <Navbar />
        <Landing />
      </div>
    </div>
  );
}

export default App;
