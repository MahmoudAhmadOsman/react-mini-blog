import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Create from "./components/Create";
import NotFound from "./components/NotFound";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
 
  return (
    <Router>
      <section className="app">
        <Navbar />
        <div className="home_container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route  path="/blogs/create">
              <Create />
            </Route>

            <Route  path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route  path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
