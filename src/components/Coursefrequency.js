import { Text } from "react-native";

const CourseFrequency = ({ course }) => {
  console.log(course);
  let frequencyName = null;
  switch (course.frequency) {
  case "single":
    frequencyName = "Single Session";
    break;
  case "multi":
    frequencyName = "4 Sessions";
    break;
  default:
    frequencyName = "recurring";
    break;
  }
  switch (course.price) {
  case "Free":
  }
  return (
    <Text>
      {frequencyName} {course.price}
    </Text>
  );
};

export default CourseFrequency;
