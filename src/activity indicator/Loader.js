import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loader = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(!loading);
    }, 1500);
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      {loading ? (
        <ActivityIndicator size="large" color="skyblue" />
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    // padding: 10,
    // marginTop: 100,
  },
});

export default Loader;
