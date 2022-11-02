import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useCategory = () => {
  const [category, setCategory] = useState([]);

  const fetchApi = () => {
    courseClient
      .get("/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return [category];
};

export default useCategory;
