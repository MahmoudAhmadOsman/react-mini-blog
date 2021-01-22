const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="/" className="text-danger">
          React Mini Blog
        </a>
      </h1>
      <div className="links">
        <a href="/" className="mr-3">
          Home
        </a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
