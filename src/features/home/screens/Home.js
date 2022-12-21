import { Icon } from "@rneui/base";
import { Card, ListItem, SearchBar } from "@rneui/themed";
import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  CourseView,
  FlexView,
  FlexWrap,
  HomeView,
  IconView,
} from "../../../../style";
import courseClient from "../../../api/courseClient";
import CourseMode from "../../../components/CourseMode";
import { courseImage } from "../../../utils/ImageUtil";
import CourseSection from "../components/CourseSection";
import useHome from "../hooks/useHome";
import { useTheme } from "styled-components";

const Home = ({ navigation }) => {
  const [homeContent] = useHome();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [showResults, setShowResults] = useState(false);
  const theme = useTheme();

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

  const swapSearchBarDisplay = () => {
    if (showSearchBar) {
      setShowSearchBar(false);
    } else {
      setShowSearchBar(true);
    }
  };

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <IconView>
            <Icon
              name="search"
              color={theme.BACKGROUND_COLOR}
              onPress={() => swapSearchBarDisplay()}
            />
          </IconView>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderSearchBar = (showSearchBarFlag) => {
    if (showSearchBarFlag) {
      return (
        <SearchBar
          lightTheme
          // platform="android"
          placeholder="Type Here..."
          onChangeText={(text) => searchCourses(text)}
          onClear={() => searchCourses("")}
          value={search}
          containerStyle={{ backgroundColor: theme.BACKGROUND_COLOR }}
          inputStyle={{ backgroundColor: theme.BACKGROUND_COLOR }}
        />
      );
    } else {
      return <></>;
    }
  };

  const displaySearchResults = () => {
    return (
      <HomeView showsVerticalScrollIndicator={false}>
        {searchResults.map((course, i) => (
          <ListItem key={i} bottomDivider>
            <FlexWrap>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CourseDetail", { id: course.course_id })
                }
              >
                <Card>
                  <CourseImage
                    source={{
                      uri: courseImage(course.image),
                    }}
                  />
                  <View>
                    <CourseTitle>{course.title}</CourseTitle>
                    <FlexView direction="row">
                      <FlexView direction="column">
                        <CourseAuthor>{course.author}</CourseAuthor>
                        <Text>{course.price}</Text>
                      </FlexView>
                      <CourseView>
                        <CourseMode course={course} />
                      </CourseView>
                    </FlexView>
                  </View>
                </Card>
              </TouchableOpacity>
            </FlexWrap>
          </ListItem>
        ))}
      </HomeView>
    );
  };

  const displayHomeContent = () => {
    return (
      <HomeView showsVerticalScrollIndicator={false}>
        {homeContent.map((courseSec) => (
          <CourseSection
            content={courseSec}
            key={courseSec.key}
            navigation={navigation}
          />
        ))}
      </HomeView>
    );
  };

  return (
    <View>
      {renderSearchBar(showSearchBar)}
      {showResults ? displaySearchResults() : displayHomeContent()}
    </View>
  );
};

export default Home;
