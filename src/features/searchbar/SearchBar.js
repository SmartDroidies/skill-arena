import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@env";
const SearchBar = ({ }) => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get("https://xmp3cyul14.execute-api.ap-south-1.amazonaws.com/Prod")
      console.log(data.results);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, [API_URL]);

  return (
    <View style={styles.searchBar}>
      <FontAwesome5 name="search" color="black" style={styles.iconSearch} />
      <TextInput
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
    </View>
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
