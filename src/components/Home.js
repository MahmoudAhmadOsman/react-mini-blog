import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  let blogTitiles = "Latest Blog Updates";
  // Display list of blog posts using useState() function
  //1. Desctructure the data using blogs & setBlogs [] array desctructing
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Assistant Media Planner",
      body:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      author: "Idaline Crossland",
      PublushiedDate: "9/30/2020",
    },
    {
      id: 2,
      title: "GIS Technical Architect",
      body:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      author: "Selinda Raspel",
      PublushiedDate: "4/27/2020",
    },
    {
      id: 3,
      title: "Compensation Analyst",
      body:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      author: "Paulie Riguard",
      PublushiedDate: "11/14/2020",
    },
    {
      id: 4,
      title: "Analog Circuit Design manager",
      body:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      author: "Betteann Longdon",
      PublushiedDate: "10/9/2020",
    },
  ]);

  //Delete Blog Posts
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    //Now, set  the newBlogs value to the setBlogs Hook
    setBlogs(newBlogs);
  };

  return (
    <section className="home">
      <div className="container">
        <div className="row">
          {/* St: 1 Use props to pass data to the BlogList component */}
          <BlogList
            blogs={blogs}
            blogTitiles={blogTitiles}
            //handleDelete func to delete blogs and then pass it as a props to the BlogList component
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
