import { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogList.css";

//St: 2 pass the props into the function -- Recieved props in destructing form
const BlogList = ({ blogs, blogTitiles }) => {
  //Search Term
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className="blog_list">
      <h1 className="text-danger">
        {blogTitiles}
        <small
          className="text-muted who-wrote mt-4"
          style={{ fontSize: "12px" }}
        >
          # of posts <span className="badge badge-danger">{blogs.length}</span>
          &nbsp; | Built with React js library | By
          <Link to="http://mahmoudosman.com/"> Mahmoud Osman</Link>
        </small>
      </h1>

      <hr />

      <div className="data-list">
        {/* Start of Search Term div */}
        <div className="search_term">
          <input
            type="text"
            class="form-control search-term input-lg"
            placeholder="Search by blog title or author name..."
            onChange={(event) => {
              // console.log(event.target.value);
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
      {/* end of Search Term div */}

      {blogs

        // eslint-disable-next-line array-callback-return
        .filter((blog) => {
          if (searchTerm === "") {
            return blog;
          } else if (
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.author.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return blog;
          }
        })
        .map((blog) => (
          <div className="row" key={blog.id}>
            <div className="col-md-4 mb-2">
              <Link to={`/blogs/${blog.id}`}>
                <img
                  src={blog.blogImage}
                  alt={blog.title}
                  className="img-fluid img-thumbnail mb-1"
                />
              </Link>
            </div>
            <div className="col-md-7">
              <Link to={`/blogs/${blog.id}`}>
                <h1>{blog.title} </h1>
              </Link>
              <p>{blog.body}</p>
              <p className="text-muted">
                <small>
                  <b>
                    <i
                      className="fa fa-user-circle"
                      aria-hidden="true"
                      title={blog.author}
                    ></i>
                    &nbsp; &nbsp;
                  </b>
                  {blog.author} &nbsp;&nbsp; | &nbsp;&nbsp;
                </small>
                <small>
                  <b>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                  </b>
                  &nbsp; &nbsp;
                  {blog.PublishedDate}
                </small>
              </p>

              <hr />
            </div>
          </div>
        ))}
    </section>
  );
};

export default BlogList;
