import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin: 8px;
  flex: 1;
`;

export const CourseContainer = styled.View`
  background-color: pink;
  flex: 1;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  letter-spacing: 0;
  font-weight: 500;
  color: brown;
  lineheight: 25;
`;

export const CourseSectionView = styled.View`
  margin-top: 20px;
`;

export const CourseImage = styled.Image`
  width: 100px;
  height: 100px;
`;
