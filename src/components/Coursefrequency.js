import { useState, useEffect } from "react";
import courseClient from "../api/courseClient";

const CourseFrequency = () => {
  const [frequency, setfrequency] = useState([]);

  const Frequency = () => {
    courseClient
      .get("/course", { params: { frequency } })
      .then((response) => {
        setfrequency(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    Frequency();
  }, []);

  return [Frequency];
};
export default CourseFrequency;
