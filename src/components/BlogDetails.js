import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const blogDetailsTitle = " Blog Details";
  //Use (useParams) Hook to get the blog params such as id, title, body etc
  const { id } = useParams();
  //Get the rest of the blog details by using the custon useFetch Hook
  const { data: blog, error, isLoading } = useFetch(
    "https://blogs-api.herokuapp.com/blogs" + id
  );

  return (
    <section className="blog_details">
      {/* If data is still loading show this */}
      {isLoading && (
        <div
          className="spinner-border text-muted mt-5"
          title="loading blog data..."
        ></div>
      )}
      {/* If there is an error show the error  */}

      {error && (
        <div
          className="alert alert-danger"
          style={{ marginTop: "9rem", textAlign: "center" }}
        >
          <strong>
            <i className="fa fa-warning mr-1"></i>
            {error}
          </strong>
        </div>
      )}

      {/* Now, show the data if there is no error & finished loadin */}
      {blog && (
        <div className="container">
          <h1 className="text-info mt-3">
            {blogDetailsTitle}
            <Link to="/">
              <i className="fa fa-chevron-left pull-right" title="Go back"></i>
            </Link>
          </h1>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <img src={blog.blogImage} alt={blog.title} />
            </div>
          </div>
          {/* 2nd row */}
          <div className="row">
            <div className="col-md-12">
              <h1>{blog.title}</h1>
              <p>
                <i className="fa fa-user-circle"></i> &nbsp;
                {blog.author} &nbsp; | &nbsp;
                <span className="text-muted">{blog.PublishedDate} </span>
              </p>

              <hr />
              <p>{blog.body}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogDetails;
