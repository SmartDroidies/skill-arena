import styled from "styled-components";
import { StyleSheet, } from "react-native";


export const Container = styled.SafeAreaView`
    margin-top: 10px;
	flex: 1;
`;


export const CourseView = styled.View`  
      marginTop: 100px;   
`;

export const CategoryView = styled.View`  
      marginTop: 20px;   
`;

export const ProfileView = styled.View`  
    // flex: 1
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    `;
