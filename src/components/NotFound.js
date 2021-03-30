import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1 className="text-danger">Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              <p>Sorry. Page Not found!</p>
            </div>
            <div className="error-actions">
              <hr />
              <Link to="/" className="text-primary">
                Take Me Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
