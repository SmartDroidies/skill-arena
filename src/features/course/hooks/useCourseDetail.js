import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";

const useCourseDetail = (courseId) => {
  const [courseDetail, setCourseDetail] = useState([]);

  const loadCourse = () => {
    courseClient
      .get("/course", { params: { course_id: courseId } })
      .then((response) => {
        setCourseDetail(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    loadCourse();
  }, []);

  return [courseDetail];
};

export default useCourseDetail;
