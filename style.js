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
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
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
export const CourseDetailImage = styled.Image`
  width: 300px;
  height: 150px;
  align-self: center;
`;

export const CourseTitle = styled.Text`
  color: ${(props) => props.theme.TITLE_COLOR};
  font-size: 20px;
  font-weight: bold;
`;

export const CourseAuthor = styled.Text`
  font-size: 18px;
`;
export const FrequencyView = styled.View`
  font-size: 12px;
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
  flex-grow: ${(props) => props.grow || 1};
`;

export const CourseView = styled.View`
  display: flex;
`;

export const PriceView = styled.View`
  margin-left: 8px;
  margin-top: 4px;
`;

export const IconView = styled.View`
  margin-right: 20px;
  // color: ${(props) => props.theme.PRIMARY_COLOR};
`;

// export const HomeView = styled.View`
//   margin-horizontal: 20px;
//   `;

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
