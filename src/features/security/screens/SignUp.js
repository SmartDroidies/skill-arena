import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "../../../../style";

export const SignUp = ({ navigation }) => {
  const [setUsername] = useState("");
  const [setPassword] = useState("");
  const [setFirstname] = useState("");
  const [setLastname] = useState("");
  const [setEmail] = useState("");
  const [setPhone] = useState("");
  const [usernameError] = useState("");
  const [passwordError] = useState("");
  const [emailError] = useState("");
  const [phoneError] = useState("");
  const [firstnameError] = useState("");
  const [lastnameError] = useState("");
  const [signupError] = useState("");
  const [loading] = useState(false);

  return (
    <Container>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Create a new account</Text>
          <Input
            placeholder="Username"
            label="Username *"
            errorMessage={usernameError}
            renderErrorMessage={false}
            style={styles.input}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            placeholder="Password"
            label="Password *"
            errorMessage={passwordError}
            renderErrorMessage={false}
            secureTextEntry={true}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            placeholder="First Name"
            label="First Name *"
            errorMessage={firstnameError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setFirstname(text)}
          />
          <Input
            placeholder="Last Name"
            label="Last Name *"
            errorMessage={lastnameError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setLastname(text)}
          />
          <Input
            placeholder="Email"
            label="Email"
            errorMessage={emailError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Phone Number"
            label="Phone Number *"
            errorMessage={phoneError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setPhone(text)}
          />
          {signupError.trim().length > 0 && (
            <Text style={styles.textError}>{signupError}</Text>
          )}
          <Button
            title="Sign Up"
            onPress={SignUp}
            buttonStyle={styles.button}
            loading={loading}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    // backgroundColor: Globals.COLOR.forestGreen,
    marginHorizontal: 15,
    marginTop: 10,
    width: 250,
  },
  container: {
    alignItems: "center",
    // backgroundColor: Globals.COLOR.mossGreen,
    marginTop: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  textError: {
    // color: Globals.COLOR.error,
    marginVertical: 5,
  },
  textLabel: {
    // color: Globals.COLOR.textColor,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
  },
});

export default SignUp;
