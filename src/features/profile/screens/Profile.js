import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

const Profile = () => {
  const name = "karthick";
  const gmail = "karthickmohan419@gmail.com"

  return (
    <View style={styles.container}>
      <Text>name : {name}</Text>
      <Text>gmail : {gmail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingLeft: 25,
    paddingTop: 250,
    backgroundColor:"skyblue",
  },
});

export default Profile;
