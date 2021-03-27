import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Footer from "./Footer";

const Home = () => {
  let blogTitiles = "Latest Blog Updates";
  // Display list of blog posts using useState() function
  //1. Desctructure the data using blogs & setBlogs [] array desctructing
  const [blogs, setBlogs] = useState(null);
  //Loading state
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
  - UseEffect Hook or function
  - Runs only after the 1st initial
*/
  useEffect(() => {
    //console.log(blogs);
    //Do fetch request here

    fetch("http://localhost:8000/blogs")
      .then((res) => {
        //console.log(res);
        //Check if there is an error from the Server
        if (!res.ok) {
          throw Error("Caution: Unable to fetch the data for the server!");
        }

        return res.json(); //After this completes, then run .then function
      })
      .then((data) => {
        // console.log(data);
        //Now, set the state to data or the response
        setBlogs(data);
        //After data is loaded, set the the State to false
        setisLoading(false);
        //After data is fetched, empty the error
        setError(null);
      })
      .catch((err) => {
        setisLoading(false);
        //console.log(err.message);
        setError(err.message);
      });
  }, []);

  return (
    <section className="home">
      <div className="container">
        {/* St: 1 Use props to pass data to the BlogList component */}

        {error && (
          <div class="alert alert-danger mt-3">
            <strong>
              <i className="fa fa-warning mr-1"></i>
              {error}
            </strong>
          </div>
        )}

        {isLoading && (
          <div
            className="spinner-border text-muted mt-5"
            title="loading data..."
          ></div>
        )}
        {blogs && <BlogList blogs={blogs} blogTitiles={blogTitiles} />}
      </div>

      <Footer />
    </section>
  );
};

export default Home;
