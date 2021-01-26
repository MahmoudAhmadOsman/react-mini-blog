import { Link } from "react-router-dom";
import logo from "../images/blog-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/" className="text-secondary">
          <img src={logo} alt="logo" />
          React Mini Blog
        </Link>
      </h1>
      <div className="links">
        <Link to="/" className="mr-3">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blogs/create">Add Post</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
