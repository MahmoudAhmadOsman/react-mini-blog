import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1 className="text-danger">Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">
              <p>Sorry, an error has occured, Requested page not found!</p>
            </div>
            <div class="error-actions">
              {" "}
              <hr />
              <Link to="/" class="text-primary">
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
