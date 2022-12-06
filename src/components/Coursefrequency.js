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
  return <Text>{frequencyName}</Text>;
};

export default CourseFrequency;
