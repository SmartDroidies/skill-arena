import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useHome = () => {
  const [homeContent, setHomeContent] = useState([]);

  const sortSection = (sections) => {
    return sections.sort((a, b) => {
      return a.order < b.order;
    });
  };

  const fetchApi = () => {
    courseClient
      .get("/home")
      .then((response) => {
        setHomeContent(sortSection(response.data));
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return [homeContent];
};

export default useHome;
