import styled from "styled-components";

export const Container = styled.SafeAreaView`
  margin-top: 20px;
  flex: 1;
`;


export const ProfileView = styled.View`  
    // flex: 1
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    `;
