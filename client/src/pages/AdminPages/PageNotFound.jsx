import { useEffect } from "react";


const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";

  }, []);
  return <h2>Page not found!</h2>;
};

export default PageNotFound;
