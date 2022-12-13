import { Badge } from "@rneui/themed";
import { Text, View } from "react-native";

const CourseFrequency = ({ course }) => {
  // console.log(course);
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

  const getPrice = (course) => {
    let price = "";
    if (course.price) {
      if (course.price === "Free") {
        price = "Free";
      } else {
        price = course.price;
      }
    }
    return price;
  };

  return (
    <View>
      <Text> {frequencyName} </Text>
      <Badge value={getPrice(course)} />
    </View>
  );
};

export default CourseFrequency;
