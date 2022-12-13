import { TextInput, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import courseClient from "../../api/courseClient";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState([]);

  const fetchApi = () => {
    courseClient
      .post("/search")
      .then((response) => {
        setSearchTerm(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={(text) => searchCourses(text)}
      onClear={(text) => searchCourses("")}
    ></SearchBar>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    marginTop: 15,
  },
  iconSearch: {
    marginTop: 15,
  },
});

export default SearchBar;
