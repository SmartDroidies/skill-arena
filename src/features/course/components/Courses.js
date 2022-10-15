import { TouchableOpacity } from "react-native";
import { Text, Card, View } from "@rneui/themed";
import Category from "./Category";

const Course= ({ content, navigation }) => (

    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Courses", { category:content.category })}
      >
        <Card>
          <Card.Title>
            <Text h4>{content.title}</Text>
          </Card.Title>
        </Card>
      </TouchableOpacity>
    </View>
);


export default Course;