import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

const Profile = () => {
  const userName = "Prasath B";
  const userEMail = "PrasathB@gmail.com";

  return (
    <View style={styles.container}>
      <Text>Name : {userName}</Text>
      <Text>E-Mail : {userEMail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
  },
});

export default Profile;
