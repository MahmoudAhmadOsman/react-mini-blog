import { Link } from "react-router-dom";
import logo from "../images/blog-logo.png";

const Navbar = () => {
  return (
    <section className="main_navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="logo" />
          React Mini Blog
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                about
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blogs/create">
                Add Post
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
