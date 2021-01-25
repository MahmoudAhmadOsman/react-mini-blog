import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  // const title = "React Mini Blog";
  return (
    <div className="app">
      <Navbar />
      <Home />
      <div className="content"></div>
    </div>
  );
}

export default App;
