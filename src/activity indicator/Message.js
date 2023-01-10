import React from "react";
import { Text , View, StyleSheet } from "react-native";

const Message = () => {
  return (
    <View style={styles.container}>
      <Text> error occured </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Message;
