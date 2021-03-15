import { Link } from "react-router-dom";

//St: 2 pass the props into the function -- Recieved props in destructing form
const BlogList = ({ blogs, blogTitiles }) => {
  //const BlogList = (props) => same as top
  //3. create local variable
  //   const blogs = props.blogs;
  //   console.log(props, blogs);
  // const blogTitiles = props.blogTitiles;

  //Delete blog post
  // const handleDelete =() =>{
  //   //alert("Delete btn")
  //   fetch("http://localhost:8000/blogs/" + blogs.id, {
  //     method: "DELETE",

  //   }).then(() => {
  //     alert("Post deleted!");
  //   })
  // }

  return (
    <div className="blog_list">
      <h1 className="text-danger">
        {blogTitiles}
        <small
          className="text-muted pull-right mt-4"
          style={{ fontSize: "12px" }}
        >
          {" "}
          # of posts <span className="badge badge-danger">{blogs.length}</span> &nbsp;
          | Built with React js library | By
          <a href="http://mahmoudosman.com/"> Mahmoud Osman</a>
        </small>
      </h1>

      <hr />
      {blogs.map((blog) => (
        //  {blog.length < 0 ?

        //    <div className="alert alert-danger">No post</div>
        //  }
        //    :

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
              {/* <button
              onClick={() => handleDelete(blog.id)}
              className="btn btn-outline-danger btn-sm fa fa-trash ml-3"
              title="Delete"
            ></button> */}
            </p>

            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
