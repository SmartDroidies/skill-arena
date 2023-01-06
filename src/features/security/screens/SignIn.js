import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { Container } from "../../../../style";
import { Auth } from "aws-amplify";

const SignIn = ({ navigation, updateAuthState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const SignIn = () => {
    setLoginError("");

    if (!email || email.length === 0) {
      setEmailError("Enter E-mail");
    } else {
      setEmailError("");
    }

    if (!password || password.length === 0) {
      setPasswordError("Enter Password");
    } else {
      setPasswordError("");
    }

    if (email && email.length > 0 && password && password.length > 0) {
      setLoading(true);
      Auth.signIn(email, password)
        .then((user) => {
          // console.log(user);
          setLoading(false);
          updateAuthState("loggedIn");
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
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
            placeholder="Enter your e-mail"
            label="E-mail *"
            errorMessage={emailError}
            renderErrorMessage={false}
            style={styles.input}
            errorStyle={styles.textFieldError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setEmail(text)}
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
