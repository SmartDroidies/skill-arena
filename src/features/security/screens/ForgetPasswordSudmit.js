import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { Auth } from "aws-amplify";
import { Container } from "../../../../style";

const ForgotPasswordSubmit = ({ navigation }) => {
  const [username] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [codeError, setCodeError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [resetError, setResetError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);

  const resend = () => {
    setLoadingResend(true);

    Auth.forgotPassword(username)
      .then(() => {
        setLoadingResend(false);
      })
      .catch((error) => {
        setResetError(error.message);
        setLoadingResend(false);
      });
  };

  const reset = () => {
    if (!code || code.length === 0) {
      setCodeError("Enter confirmation code");
    } else {
      setCodeError("");
    }

    if (!password || password.length === 0) {
      setPasswordError("Enter Password");
    } else {
      setPasswordError("");
    }

    if (code && code.length > 0 && password && password.length > 0) {
      setLoading(true);
      Auth.forgotPasswordSubmit(username, code, password)
        .then(() => {
          setLoading(false);
          navigation.navigate("SignIn");
        })
        .catch((error) => {
          setResetError(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.sectionWelcome}>
          <Text style={styles.title}>Reset your password</Text>
        </View>
        <View style={styles.sectionFields}>
          <Input
            placeholder="Enter your confirmation code"
            label="Confirmation Code *"
            errorMessage={codeError}
            renderErrorMessage={false}
            style={styles.input}
            errorStyle={styles.textFieldError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setCode(text)}
          />
          <Input
            placeholder="Enter your new password"
            label="Password *"
            errorMessage={passwordError}
            renderErrorMessage={false}
            secureTextEntry={true}
            errorStyle={styles.textFieldError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.textError}>{resetError}</Text>
          <Button
            title="Submit"
            onPress={reset}
            buttonStyle={styles.button}
            loading={loading}
          />
          <Button
            titleStyle={styles.link}
            title="Resend Code"
            onPress={resend}
            loading={loadingResend}
            type="clear"
          />
        </View>
        <Button
          type="clear"
          titleStyle={styles.link}
          title="Back to Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  link: {
    marginHorizontal: 10,
  },
  sectionFields: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  sectionWelcome: {
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 70,
    width: "100%",
  },
  textError: {
    alignSelf: "center",
    marginVertical: 5,
  },
  textLabel: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 15,
  },
});

export default ForgotPasswordSubmit;
