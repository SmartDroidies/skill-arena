import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useCategory = () => {
  const [category, setCategory] = useState([]);

  const sortCategory = (categories) => {
    return categories.sort((a, b) => {
      return a.order > b.order;
    });
  };

  const fetchApi = () => {
    courseClient
      .get("/category")
      .then((response) => {
        setCategory(sortCategory(response.data));
        console.log(response.data);
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
