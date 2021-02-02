//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
 
import useFetch from "./useFetch";

const Home = () => {
  let blogTitiles = "Latest Blog Updates";

  //Now, import the useFetch Custom Hook
  const { data: blogs, isLoading, error } = useFetch(
    "https://blogs-api.herokuapp.com/blogs/"
  );

  return (
    <section className="home_page">
      <div className="container">
        {/*1. Use props to pass data to the BlogList component */}

        {error && (
          <div className="alert alert-danger" style={{ marginTop: "9rem" }}>
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

     
    </section>
  );
};

export default Home;
