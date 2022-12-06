import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding-top: ${Constants.statusBarHeight + "px"};
  justify-content: center;
  flex: 1;
`;

export const CategoryContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const CategoryTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  letter-spacing: 0;
  font-weight: 500;
`;

export const CourseSectionView = styled.View`
  margin-top: 20px;
`;

export const CourseImage = styled.Image`
  width: 240px;
  height: 100px;
`;

export const CourseTitle = styled.Text`
  color: ${(props) => props.theme.TITLE_COLOR};
  font-family: ${(props) => props.theme.FONT_FAMILY};
  font-size: 18px;
`;

export const CourseAuthor = styled.Text`
  font-size: 16px;
`;
export const FrequencyView = styled.View`
  font-size: 16px;
`;

export const FlexWrap = styled.View`
  width: 300px;
  height: 300px;
`;

export const FlexView = styled.View`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
`;

export const CourseView = styled.View`
  width: 60px;
  position: absolute;
  top: 10px;
  left: 200px;
  margin: auto;
`;
