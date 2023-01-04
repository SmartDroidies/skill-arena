import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import Auth from "@aws-amplify/auth";
import { Container } from "../../../../style";

const ForgotPassword = ({ navigation }) => {
  const [Email, SetEmail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [resetError, setResetError] = useState("");
  const [loading, setLoading] = useState(false);

  const reset = () => {
    if (!Email || Email.length === 0) {
      setEmailError("Enter Email");
    } else {
      setEmailError("");
    }

    if (Email && Email.length > 0) {
      setLoading(true);
      Auth.forgotPassword(Email)
        .then(() => {
          setLoading(false);
          navigation.navigate("ForgotPasswordSubmit", {
            Email,
          });
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
            placeholder="Enter your Email"
            label="Email *"
            errorMessage={EmailError}
            renderErrorMessage={false}
            style={styles.input}
            errorStyle={styles.textFieldError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => SetEmail(text)}
          />
          <Text style={styles.textError}>{resetError}</Text>
          <Button title="Send" onPress={reset} loading={loading} />
          <Button
            title="Have a code, verify now"
            disabled={Email === ""}
            onPress={() =>
              navigation.navigate("ForgotPasswordSubmit", {
                Email,
              })
            }
            type="clear"
          />
        </View>
        <Button
          type="clear"
          title="Back to Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
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
    // color: Globals.COLOR.error,
    marginVertical: 5,
  },
  textFieldError: {
    // color: Globals.COLOR.error,
  },
  textLabel: {
    // color: Globals.COLOR.textColor,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 15,
  },
});

export default ForgotPassword;
