import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [body, setBody] = useState("");
  const [publishedDate, setpublishedDate] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  //After post is created, redirect the user to the home page
  const history = useHistory();

  const creatPostTitle = "Add New Post";

  //handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert("Form Submitted!");
    //Now, create blog object
    const blog = { title, author, blogImage, body, publishedDate };
    //console.log(blog);

    //Now, make the POST request here to the same api endpoint
    fetch("https://stapes-api.onrender.com/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setisSuccess(true);
      setTimeout(function () {
        history.push("/");
      }, 2000);
    });
  };

  return (
    <section className="create_post">
      <div className="container">
        {isSuccess && (
          <div className="alert alert-success mt-3">
            <strong>Success: </strong> A new blog post has been added!
          </div>
        )}
        <h1 className="text-info">{creatPostTitle} </h1> <hr />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter post title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* <p>Post Title: {title}</p> */}
            </div>
          </div>
          {/* Author */}
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author name"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              {/* <p>Author: {author}</p> */}
            </div>
          </div>
          {/* blog image */}

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="postImage">Post Image</label>
                <input
                  type="file"
                  className="form-control"
                  value={blogImage}
                  onChange={(e) => setBlogImage(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Body */}
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="body">Post Body</label>

                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Post title"
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Published Date */}
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="date">Published Date</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  value={publishedDate}
                  onChange={(e) => setpublishedDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* btn */}
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input type="submit" className="btn btn-info" value="Save" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Create;
