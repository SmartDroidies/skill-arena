import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchBar = ({ searchTerm }) => {
  return (
    <View style={styles.searchBar}>
      <FontAwesome5 name="search" color="black" style={styles.iconSearch} />
      <TextInput
        placeholder="Search"
        style={styles.inputSearch}
        value={searchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
  },
});

export default SearchBar;
