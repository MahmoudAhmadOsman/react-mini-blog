const Home = () => {
  const title = "React Mini Blog";
  const builtWith = "Built with React.js library.";
  const urlLink = "http://mahmoudosman.com/";
  const author = "Mahmoud Osman";
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div class="jumbotron text-center">
              <h1 className="text-danger">{title}</h1> <hr />
              <p>
                <b>{builtWith} </b>| Developed by {author}
              </p>
              <a
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mr-3"
              >
                Learn More
              </a>
              <a href="/create" className="btn btn-info btn-lg">
                Blogs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
