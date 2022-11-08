import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useCourse = () => {
  const [course, setCourses] = useState([]);

  const sortCourse = (courses) => {
    return courses.sort((a, b) => {
      return a.order > b.order;
    });
  };

  const courseApi = () => {
    courseClient
      .get("/course")
      .then((response) => {
        setCourses(sortCourse(response.data));
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    courseApi();
  }, []);

  return [course];
};

export default useCourse;
