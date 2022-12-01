import { Icon } from "@rneui/base";
import { SearchBar } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Container } from "../../../../style";
import courseClient from "../../../api/courseClient";
import CourseSection from "../components/CourseSection";
import useHome from "../hooks/useHome";

const Home = ({ navigation }) => {
  const [homeContent] = useHome();
  const [search, setSearch] = useState("");

  const searchCourses = (text) => {
    // Check if searched text is not blank
    if (text) {
      // // Inserted text is not blank
      // // Filter the masterDataSource
      // // Update FilteredDataSource
      // const newData = masterDataSource.filter(function (item) {
      //   const itemData = item.title
      //     ? item.title.toUpperCase()
      //     : ''.toUpperCase();
      //   const textData = text.toUpperCase();
      //   return itemData.indexOf(textData) > -1;
      // });
      // setFilteredDataSource(newData);
      // FIXME - Move this to its own hook or utility method
      // FIXME - Don't search until the size is 3 characters long
      collectCoursesBySearchTerm(text);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      // setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const collectCoursesBySearchTerm = (searchTerm) => {
    courseClient
      .post("/search", { term: searchTerm })
      .then((response) => {
        console.log(response.data);
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

  return (
    <Container>
      <SearchBar
        placeholder="Type Here..."
        value={search}
        onChangeText={(text) => searchCourses(text)}
        onClear={(text) => searchCourses("")}
      ></SearchBar>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {homeContent.map((courseSec) => (
          <CourseSection
            content={courseSec}
            key={courseSec.key}
            navigation={navigation}
          ></CourseSection>
        ))}
      </ScrollView>
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
