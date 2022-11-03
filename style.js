import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin-top: 8px;
  flex: 1;
`;

export const CourseSectionView = styled.View`
  margin-top: 20px;
`;

export const CourseImage = styled.Image`
  width: 100px;
  height: 100px;
`;

// export const HomeView = styled.View`
//     margin-top: 10px;
//     margin-Horizontal: 1;
//     margin-Vertical: 10;
//     padding: 5px;
// `;


export const StyledText = styled.Text`
  font-size: 20px
`;

export const AuthorText = styled.Text`
  font-size: 16px;
`;

export const PageView = styled.ScrollView`
// transform: scale(0.6);
   width: 100%;
   height: 100%;
   margin-top: 5px;
   margin-Horizontal: 10px;
   margin-Vertical: 10px;
   padding: 5px;
   style={styled.scrollView}
        showsVerticalScrollIndicator={false}
`;