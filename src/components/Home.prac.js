import { useState } from "react";

const Home = () => {
  const title = "React Mini Blog";
  const builtWith = "Built with React.js library.";
  const urlLink = "http://mahmoudosman.com/";
  const author = "Mahmoud Osman";

  // handleClick function
  const handleClick = () => {
    //alert("Clicked on handleClick function");
    console.log("Clicked on handleClick function");
  };

  const handleClickAgain = (name, e) => {
    // console.log("Hello " + name, e.target);
    console.log("Hello " + name);
  };

  //change the name  or the value to be reactive by using HOOK, or useState function or Hook

  //UseState HOOK
  //Array desctructure [name, function which is setName]

  const [name, setName] = useState("James Awky");
  const [age, setAge] = useState(30);
  const handleUseState = () => {
    setName("Mahmoud Osman");
    setAge(95);
  };

  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
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

      {/* Click btn */}
      <hr />
      <h4>useState() function</h4>
      <p className="text-primary">
        {name} is {age} years old!
      </p>

      <button className="btn btn-danger btn-lg mr-1" onClick={handleClick}>
        Click
      </button>
      <button
        className="btn btn-info btn-lg mr-1"
        onClick={(e) => handleClickAgain("Mahmoud Osman!", e)}
        // onClick={function (e) {
        //   handleClickAgain("mahmoud", e);
        // }}
      >
        Click Again
      </button>

      <buttton onClick={handleUseState} className="btn btn-primary btn-lg">
        UseState
      </buttton>
    </section>
  );
};

export default Home;
