import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Profile = () => {
  const userName = "Prasath B";
  const userEMail = "PrasathB@gmail.com";

  return (
    <View style={styles.container}>
      <Text>Name : {userName}</Text>
      <Text>E-Mail : {userEMail}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: '#567356'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

export default Profile
