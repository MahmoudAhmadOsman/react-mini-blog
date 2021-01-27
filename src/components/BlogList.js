import { Link } from "react-router-dom";

//St: 2 pass the props into the function -- Recieved props in destructing form
const BlogList = ({ blogs, blogTitiles }) => {
  //const BlogList = (props) => same as top
  // St: 3, create local variable
  //   const blogs = props.blogs;
  //   console.log(props, blogs);
  // const blogTitiles = props.blogTitiles;

  return (
    <div className="blog_list">
      <h1 className="text-danger">{blogTitiles}</h1> <hr />
      {blogs.map((blog) => (
        <div className="row" key={blog.id}>
          <div className="col-md-4">
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
              <h1>{blog.title}</h1>
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
                {blog.PublushiedDate}
              </small>
            </p>

            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
