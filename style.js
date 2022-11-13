import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
  padding-top: ${Constants.statusBarHeight + "px"};
  align-items: center;
  justify-content: center;
  flex: 1;
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

export const FlexWrap = styled.View`
  width: 300px;
  height: 300px;
`;
