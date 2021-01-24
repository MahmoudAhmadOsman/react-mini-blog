import { useState } from "react";

const Home = () => {
  // Display list of blog posts using useState() function
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
  ]);

  return (
    <section className="home">
      <div className="container">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-10" key={blog.id}>
              <h1>
                <a href={blog.id}>{blog.title}</a>{" "}
              </h1>
              <p>{blog.body}</p>
              <p className="text-muted">
                <small>
                  <b>
                    <i
                      className="fa fa-user-circle"
                      aria-hidden="true"
                      title={blog.author}
                    ></i>{" "}
                    &nbsp;
                  </b>
                  {blog.author} | &nbsp;
                </small>
                <small>
                  <b>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                  </b>{" "}
                  &nbsp;
                  {blog.PublushiedDate}
                </small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
