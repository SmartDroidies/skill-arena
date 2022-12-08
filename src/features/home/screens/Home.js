import { Icon } from "@rneui/base";
import { ListItem, SearchBar } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Container } from "../../../../style";
import courseClient from "../../../api/courseClient";
import CourseSection from "../components/CourseSection";
import useHome from "../hooks/useHome";

const Home = ({ navigation }) => {
  const [homeContent] = useHome();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [showResults, setShowResults] = useState(false);

  const searchCourses = (text) => {
    // Check if searched text is not blank
    if (text && text.length > 3) {
      // FIXME - Move this to its own hook or utility method
      collectCoursesBySearchTerm(text);
      setSearch(text);
    } else {
      setShowResults(false);
      setSearch(text);
    }
  };

  const collectCoursesBySearchTerm = (searchTerm) => {
    courseClient
      .post("/search", { term: searchTerm })
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data);
        setShowResults(true);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="search"
          style={styles.icon}
          onPress={() => navigation.navigate("SearchBar")}
        />
      ),
    });
  }, [navigation]);

  const displaySearchResults = () => {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {searchResults.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    );
  };

  const displayHomeContent = () => {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {homeContent.map((courseSec) => (
          <CourseSection
            content={courseSec}
            key={courseSec.key}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <Container>
      <SearchBar
        placeholder="Type Here..."
        value={search}
        onChangeText={(text) => searchCourses(text)}
        onClear={(text) => searchCourses("")}
      ></SearchBar>
      {showResults ? displaySearchResults() : displayHomeContent()}
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
  // FIXME -  Move this to styled components
  icon: {
    marginRight: 20,
  },
});

export default Home;
