import { Badge } from "@rneui/themed";
import { Text, View } from "react-native";

const CourseFrequency = ({ course }) => {
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
    if (course.price) {
      if (course.price === "200") {
        price = "Rs 200";
      } else {
        price = course.price;
      }
    }
    return price;
  };

  // const Badgevalue = (course) => {
  //   let price = "";
  //   if (course.price) {
  //     if (course.price === "Free") {
  //       price = Badgevalue;
  //     } else {
  //       price = null;
  //     }
  //   }
  //   return price;
  // }

  return (
    <View>
      <Text>
        {frequencyName}
        <Badge value={getPrice(course)} />
        <Badgevalue />
      </Text>
    </View>
  );
};

export default CourseFrequency;
