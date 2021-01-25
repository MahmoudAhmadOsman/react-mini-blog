import logo from "../images/blog-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="/" className="text-secondary">
          <img src={logo} alt="logo" />
          React Mini Blog
        </a>
      </h1>
      <div className="links">
        <a href="/" className="mr-3">
          Home
        </a>
        <a href="/about">About</a>
        <a href="/create">New Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
