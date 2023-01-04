import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { Container } from "../../../../style";
import Auth from "@aws-amplify/auth";

const SignIn = ({ navigation, updateAuthState }) => {
  const [Email, SetEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const SignIn = () => {
    setLoginError("");

    if (!Email || Email.length === 0) {
      setEmailError("Enter Username");
    } else {
      setEmailError("");
    }

    if (!Password || Password.length === 0) {
      setPasswordError("Enter Password");
    } else {
      setPasswordError("");
    }

    if (Email && Email.length > 0 && Password && Password.length > 0) {
      setLoading(true);
      Auth.signIn(Email, Password)
        .then((user) => {
          // console.log(user);
          setLoading(false);
          updateAuthState("loggedIn");
        })
        .catch((error) => {
          setLoading(false);
          setLoginError(error.message);
        });
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.sectionWelcome}>
          <Text style={styles.title}>Sign In to proceed</Text>
        </View>
        <View style={styles.sectionLogin}>
          <Input
            placeholder="Enter your Email"
            label="Email *"
            errorMessage={EmailError}
            renderErrorMessage={false}
            style={styles.input}
            errorStyle={styles.textFieldError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => SetEmail(text)}
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
          <Button
            title="Sign In"
            onPress={SignIn}
            buttonStyle={styles.button}
            loading={loading}
          />
          <Button
            title="Forget Password"
            onPress={() => navigation.navigate("ForgotPassword")}
            type="clear"
          />
          <Button
            title="Don't have an account? Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            type="clear"
          />
        </View>
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
