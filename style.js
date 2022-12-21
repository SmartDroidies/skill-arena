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
  font-size: 14px;
`;

export const CourseAuthor = styled.Text`
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
  // margin: auto;
`;

// export const ProfileContainer = styled.View`
//   flex: 1px;
//   background-color: #fff;
//   align-items: center;
//   justify-content: center;
// `;

// export const SignButton = styled.view`
//   width: 80px;
// `;

// export const ForgotButton = styled.View`
//   height: 30px;
//   margin-bottom: 30px;
// `;

// export const ProfileText = styled.Text`
//   height: 5px;
//   flex: 1px;
//   padding: 10px;
//   margin-left: 20px;
// `;

// export const ProfileView = styled.Text`
//     width: 70px;
//     marginBottom: 20,
//     height: 45px;
//     margin-Bottom: 20px;
//     align-Items: center;
//     background-color: ${(props) => props.theme.BACKGROUND_COLOR};
// `;