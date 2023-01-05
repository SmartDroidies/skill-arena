import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useCourse = (category) => {
  const [courses, setCourses] = useState([]);

  const sortCourses = (courses) => {
    return courses.sort((a, b) => {
      return a.order > b.order;
    });
  };

  const loadCourses = () => {
    courseClient
      .get("/course", { params: { ctgry: category } })
      .then((response) => {
        setCourses(sortCourses(response.data));
        console.log(response.data);
      })

      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return [courses];
};

export default useCourse;
