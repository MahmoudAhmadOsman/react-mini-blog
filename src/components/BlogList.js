import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogList.css";
// import _ from "lodash";

//St: 2 pass the props into the function -- Recieved props in destructuring form
const BlogList = ({ blogs, blogTitiles }) => {
  //Pagination - pageSize
  // const pageSize = 2;
  // const [currentPage, setcurrentPage] = useState(1);

  //Search Term
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, blogs]);

  //Pagination - PageCount
  // const pageCount = blogs ? Math.ceil(blogs.length / pageSize) : 0;
  // if (pageCount === 1) return null;

  //Pages - All pages
  // const pages = _.range(1, pageCount + 1);

  //Pagination Function
  // const pagination = (pageNo) => {
  //   setcurrentPage(pageNo);
  //   const startIndex = (pageNo - 1) * pageSize;
  //   const paginatedBlog = _(blogs).slice(startIndex).take(pageSize).value();
  //   setcurrentPage(paginatedBlog);
  //   setData(paginatedBlog);
  // };

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
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* end of Search Term div */}

      {searchResults.length === 0 ? (
        <div className="alert alert-danger">
          <i className="fa fa-warning"></i> &nbsp; The searched term of &nbsp;
          <b>
            <Link to="/">{searchTerm}</Link>
          </b>
          &nbsp; is not found!
        </div>
      ) : (
        searchResults.map((blog) => (
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
                  {blog.PublishedDate ?(
blog.PublishedDate) : (
<span> { new Date().getFullYear() } </span> )

}
                </small>
              </p>

              <hr />
            </div>
          </div>
        ))
      )}

      {/* Start of pagination */}

      {/* <div className="container mt-4">
        <ul className="pagination pagination-lg">
          {pages.map((page) => (
            <li class={page === currentPage ? "page-item active" : "page-item"}>
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </div> */}

      {/* End of pagination */}
    </section>
  );
};

export default BlogList;
