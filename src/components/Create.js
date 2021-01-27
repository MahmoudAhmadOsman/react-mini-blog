import { useState } from "react";

const Create = () => {
  const { title, setTitle } = useState();

  const creatPost = "Create New Post";
  return (
    <section className="create_post">
      <div className="container">
        <h1 className="text-info">{creatPost} </h1> <hr />
        <form>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Post title"
                  required
                  value={title}
                />
              </div>
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
                />
              </div>
            </div>
          </div>
          {/* blog image */}

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="postImage">Post Image</label>
                <input type="file" className="form-control" required />
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
                ></textarea>
              </div>
            </div>
          </div>

          {/* Published Date */}
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="date">Published Date</label>
                <input type="date" className="form-control" required />
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
