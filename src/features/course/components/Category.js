import { StyleSheet, View } from "react-native";
import { Card, Text } from "@rneui/themed";

const Category = ({ content }) => ({

  return(
    
  <View style = { styles.container } >
      <><Text h4>{content.desc}</Text>
        <FlatList
          horizontal={true}
          data={content.category}
          renderItem={renderCourseCard}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false} /></>
  </View >

  );
};
const styles = StyleSheet.create({});

export default Category;
