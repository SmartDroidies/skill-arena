import { Badge } from "@rneui/themed";
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

  const displayPrice = ({ course }) => <Badge value={course.price}></Badge>;

  return (
    <View>
      <Text> {frequencyName} </Text>
      {displayPrice(course)}
    </View>
  );
};

export default CourseFrequency;
