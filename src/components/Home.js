//import { useState, useEffect } from "react";
import BlogList from "./BlogList";

import useFetch from "./useFetch";

const Home = () => {
  let blogTitiles = "React js Blogs";

  //Now, import the useFetch Custom Hook
  const { data: blogs, isLoading, error } = useFetch(
    "https://stapes-api.onrender.com/blogs/"
  );

  return (
    <section className="home_page">
      <div className="container">
      

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
  {/*1. Use props to pass data to the BlogList component */}
        {blogs && <BlogList blogs={blogs} blogTitiles={blogTitiles} />}
      </div>
    </section>
  );
};

export default Home;
