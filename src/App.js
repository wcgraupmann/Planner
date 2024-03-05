import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-400 to-indigo-200">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
