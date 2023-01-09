import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "../../../../style";
import { Auth } from "@aws-amplify/auth";

export const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loading, setLoading] = useState(false);

  const regPhone = /^[0-9]{10}$/;

  const SignUp = () => {
    let bFieldsValid = true;

    if (!username || username.length === 0) {
      setUsernameError("Enter Username");
      bFieldsValid = false;
    } else {
      setUsernameError("");
    }
    if (!password || password.length === 0) {
      setPasswordError("Enter Password");
      bFieldsValid = false;
    } else {
      setPasswordError("");
    }
    if (!firstName || firstName.length === 0) {
      setFirstNameError("Enter First Name");
      bFieldsValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName || lastName.length === 0) {
      setLastNameError("Enter Last Name");
      bFieldsValid = false;
    } else {
      setLastNameError("");
    }

    if (!email || email.length === 0) {
      setEmailError("");
    } else {
      setEmailError("");
    }

    if (!phone || phone.length === 0) {
      setPhoneError("Enter Phone");
      bFieldsValid = false;
    } else if (regPhone.test(phone) === false) {
      setPhoneError("Enter 10 digit phone no");
      bFieldsValid = false;
    } else {
      setPhoneError("");
    }

    if (bFieldsValid) {
      console.log("calling cognito sign up");
      setLoading(true);
      const prefixPhoneNumber = "+91" + phone;
      setUsername(email);
      Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: prefixPhoneNumber,
          name: firstName,
        },
      })
        .then((user) => {
          setLoading(false);
          navigation.navigate({
            name: "ConfirmSignup",
            params: { user: user.user.username },
          });
        })
        .catch((error) => {
          setSignupError(error.message);
          console.log(error);
          setLoading(false);
        });
    }
  };

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
            errorMessage={firstNameError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setFirstName(text)}
          />
          <Input
            placeholder="Last Name"
            label="Last Name *"
            errorMessage={lastNameError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => setLastName(text)}
          />
          <Input
            placeholder="Email"
            label="E-mail"
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
