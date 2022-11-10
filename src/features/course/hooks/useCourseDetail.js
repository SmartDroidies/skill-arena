import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useCourseDetail = ( courseId) => {
  const [coursedetail, setCourses] = useState([]);

  const sortCourses = (coursedetail) => {
    return coursedetail.sort((a, b) => {
      return a.order > b.order;
    });
  };

  const filterCourseDetail = ( courseId) => {
    let filterData = coursedetail.filter((Item) => Item.CourseId ===  courseId);
    setCourses(filterData);
    console.log (filterData)
  }

  const loadCourses = () => {
    courseClient
      .get("/course", { params: { course:  courseId } })
      .then((response) => {
        setCourses(sortCourses(response.data));
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return [coursedetail, filterCourseDetail];
};

export default useCourseDetail;