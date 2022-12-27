import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { Container } from "../../../../style";

const SignIn = ({ navigation }) => {
  const [setUsername] = useState("");
  const [setPassword] = useState("");
  const [usernameError] = useState("");
  const [passwordError] = useState("");
  const [loginError] = useState("");
  const [loading] = useState(false);

  const performSignIn = () => {
    console.log("Perform signin action");
    // FIXME Validate fields here
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.sectionWelcome}>
          <Text style={styles.title}>Sign In to proceed</Text>
        </View>
        <View style={styles.sectionLogin}>
          <Input
            placeholder="Enter your username"
            label="Username *"
            errorMessage={usernameError}
            renderErrorMessage={false}
            style={styles.input}
            errorStyle={styles.textFieldError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            placeholder="Enter your password"
            label="Password *"
            errorMessage={passwordError}
            renderErrorMessage={false}
            secureTextEntry={true}
            errorStyle={styles.textFieldError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.textError}>{loginError}</Text>
          <Button
            title="Sign In"
            onPress={performSignIn}
            buttonStyle={styles.button}
            loading={loading}
          />
          <Button
            titleStyle={styles.link}
            title="Forget Password"
            onPress={() => navigation.navigate("ForgotPassword")}
            type="clear"
          />
        </View>
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => navigation.navigate("SignUp")}
          type="clear"
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  container: {
    alignItems: "center",
    flex: 1,
  },

  link: {
    marginHorizontal: 10,
  },
  sectionLogin: {
    marginTop: 30,
    paddingHorizontal: 20,
    width: "100%",
  },
  sectionWelcome: {
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 50,
    width: "100%",
  },
  textError: {
    alignSelf: "center",
    marginVertical: 5,
  },
  textFieldError: {},
  textLabel: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 15,
  },
});

export default SignIn;
