import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  let blogTitiles = "Latest Blog Updates";
  // Display list of blog posts using useState() function
  //1. Desctructure the data using blogs & setBlogs [] array desctructing
  const [blogs, setBlogs] = useState(null);

  //Delete Blog Posts to delete posts
  const handleDelete = (id) => {
    //alert("Are you sure, you want to delete this post?");
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    //Now, set  the newBlogs value to the setBlogs Hook
    setBlogs(newBlogs);
  };

  //handleEdit function to edit posts
  const handleEdit = (id) => {
    alert(id);
  };

  /*
  - UseEffect Hook or function
  - Runs only after the 1st initial
*/
  useEffect(() => {
    //console.log("useEffect is running!");
    //console.log(blogs);
    //Do fetch request here
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json(); //After this completes, then run next .then func
      })
      .then((data) => {
        // console.log(data);
        //Now, set the state to data or the response
        setBlogs(data);
      });
  }, []);

  return (
    <section className="home">
      <div className="container">
        {/* St: 1 Use props to pass data to the BlogList component */}

        {blogs && (
          <BlogList
            blogs={blogs}
            blogTitiles={blogTitiles}
            //handleDelete func to delete blogs and then pass it as a props to the BlogList component
            handleDelete={handleDelete}
            //handleEdit function
            handleEdit={handleEdit}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
