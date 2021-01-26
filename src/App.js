import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Create from "./components/Create";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  // const title = "React Mini Blog";
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="home_container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/blogs/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
