import { Badge } from "@rneui/themed";
import { Text, View } from "react-native";

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

  const displayPrice = ({ course }) => (
    <Badge value course={course.price}></Badge>
  );
  return (
    <View>
      {/* <PricingCard
        title = { course.price}
      /> */}

      <Text> {frequencyName} </Text>
      {displayPrice(course.price)}
    </View>
  );
};

export default CourseFrequency;
