import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding-top: ${Constants.statusBarHeight + "px"};
`;

export const CategoryContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const AvatarContainer = styled.View`
  align-self: center;
  background-color: blue;
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
  align-items: center;
  width: 240px;
  height: 150px;
`;

export const CourseTitle = styled.Text`
  color: ${(props) => props.theme.TITLE_COLOR};
  font-size: 16px;
  font-weight: bold;
`;

export const CourseAuthor = styled.Text`
  font-size: 14px;
`;
export const FrequencyView = styled.View`
  font-size: 16px;
`;

export const CourseDesc = styled.Text`
  font-size: 14px;
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
  width: 70px;
  top: 10px;
  display: flex;
  left: 60px;
  flex-direction: ${(props) => props.direction || "column"};
  flex-grow: ${(props) => props.grow || 1};

  // margin: auto;
`;

export const PriceView = styled.View`
  margin-left: 8px;
  margin-top: 4px;
`;

// export const PriceBadge = styled.Badge`
//   padding: 8px;
// `;

export const CourseContainer = styled.SafeAreaView`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
`;

export const ListCourseImage = styled.Image`
  align-items: center;
  width: 100%;
  height: 150px;
`;

export const CourseFlex = styled.View`
  width: 390px;
  height: 280px;
`;
