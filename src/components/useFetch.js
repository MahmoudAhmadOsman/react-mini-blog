import { useState, useEffect } from "react";

//Custom useEffect
const useFetch = (url) => {
  // Display list of blog posts using useState() function
  //1. Desctructure the data using blogs & setBlogs [] array desctructing
  //   const [blogs, setBlogs] = useState(null);
  const [data, setData] = useState(null);
  //Loading state
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
  - UseEffect Hook or function
  - Runs only after the 1st initial
*/

  useEffect(() => {
    //Abort Controller method
    const abortController = new AbortController();
    //console.log(blogs);
    //Do fetch request here

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        //console.log(res);
        //Check if there is an error from the Server
        if (!res.ok) {
          throw Error("Caution: Unable to fetch the data from the server!");
        }

        return res.json(); //After this completes, then run .then function
      })
      .then((data) => {
        // console.log(data);
        //Now, set the state to data or the response
        setData(data);
        //After data is loaded, set the the State to false
        setisLoading(false);
        //After data is fetched, empty the error
        setError(null);
      })
      .catch((err) => {
        //1st recognize the error
        if (err.name === "AbortError") {
          console.log("fetch data abborted..!");
        } else {
          // setisLoading(false);
          //console.log(err.message);
          setError(err.message);
        }
      });

    //Last (optional): Cleanup useEffect using controller.abort() method to stop DOM request
    //return () => abortController.abort();
  }, [url]);

  //useFetch returns array or object
  return { data, isLoading, error };
};

export default useFetch;
