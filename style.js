import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin-top: 20px;
  flex: 1;
`;

export const CourseSectionView = styled.View`
  margin-top: 20px;
`;

export const ListCourseView = styled.View`
    marginTop: StatusBar.currentHeight || 0,
  heading:{
    fontSize: 30,
    fontWeight: "bold"
} 
`;