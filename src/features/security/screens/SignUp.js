import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "../../../../style";
import Auth from "@aws-amplify/auth";


export const SignUp = ({ navigation }) => {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [firstname, SetFirstname] = useState("");
  const [lastname, SetLastname] = useState("");
  const [email, SetEmail] = useState("");
  // const [phone, SetPhone] = useState("");
  const [usernameError, SetUsernameError] = useState("");
  const [passwordError, SetPasswordError] = useState("");
  const [emailError, SetEmailError] = useState("");
  // const [phoneError, SetPhoneError] = useState("");
  const [firstnameError, SetFirstnameError] = useState("");
  const [lastnameError, SetLastnameError] = useState("");
  const [signupError, SetSignupError] = useState("");
  const [loading, SetLoadingError] = useState(false);

  // const regPhone = /^[0]?[789]\d{9}$/;

  const SignUp = () => {
    let bFieldsValid = true;
    if (!username || username.length === 0) {
      ("Enter Username");
      bFieldsValid = false;
    } else {
      SetUsernameError("");
    }
    if (!password || password.length === 0) {
      SetPasswordError("Enter Password");
      bFieldsValid = false;
    } else {
      SetPasswordError("");
    }
    if (!firstname || firstname.length === 0) {
      SetFirstnameError("Enter First Name");
      bFieldsValid = false;
    } else {
      SetFirstnameError("");
    }

    if (!lastname || lastname.length === 0) {
      SetLastnameError("Enter Last Name");
      bFieldsValid = false;
    } else {
      SetLastnameError("");
    }

    if (!email || email.length === 0) {
      SetEmailError("");
    } else {
      SetEmailError("");
    }

    // if (!phone || phone.length === 0) {
    //   SetPhoneError("Enter Phone");
    //   bFieldsValid = false;
    // } else if (regPhone.test(phone) === false) {
    //   SetPhoneError("Enter 10 digit phone no");
    //   bFieldsValid = false;
    // } else {
    //   SetPhoneError("");
    // }

    if (bFieldsValid) {
      SetLoadingError(true);
      // const prefixPhoneNumber = "+91" + phone;
      Auth.signUp({
        username,
        password,
        attributes: {
          email,
          // phone_number: prefixPhoneNumber,
          name: firstname,
        },
      })
        .then((user) => {
          SetLoadingError(false);
          navigation.navigate({
            name: "ConfirmSignup",
            params: { user: user.user.username },
          });
        })
        .catch((error) => {
          SetSignupError(error.message);
          SetLoadingError(false);
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
            onChangeText={(text) => SetUsername(text)}
          />
          <Input
            placeholder="Password"
            label="Password *"
            errorMessage={passwordError}
            renderErrorMessage={false}
            secureTextEntry={true}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => SetPassword(text)}
          />
          <Input
            placeholder="First Name"
            label="First Name *"
            errorMessage={firstnameError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => SetFirstname(text)}
          />
          <Input
            placeholder="Last Name"
            label="Last Name *"
            errorMessage={lastnameError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => SetLastname(text)}
          />
          <Input
            placeholder="Email"
            label="E-mail"
            errorMessage={emailError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => SetEmail(text)}
          />
          {/* <Input
            placeholder="Phone Number"
            label="Phone Number *"
            errorMessage={phoneError}
            renderErrorMessage={false}
            errorStyle={styles.textError}
            labelStyle={styles.textLabel}
            onChangeText={(text) => SetPhone(text)}
          /> */}
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
