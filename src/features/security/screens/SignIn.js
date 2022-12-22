import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import { Container } from "../../../../style";

const SignIn = ({ navigation }) => {
  const [setUsername] = useState("");
  const [setPassword] = useState("");
  const [loading] = useState(false);
  // const [google, setGoogle] = useState("");
  // const [apple, setApple] = useState("");

  return (
    <Container>
      <Text>Sign in To Proceed</Text>
      <TextInput
        placeholder="Username"
        label="Username*"
        onChangeText={(username) => setUsername(username)}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        title="Sign In"
        onPress={SignIn}
        buttonStyle={styles.button}
        loading={loading}
      />
      <TouchableOpacity>
        <Text>Forget password</Text>
      </TouchableOpacity>
      <Text>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  // forgotPassword: {
  //   width: '100%',
  //   alignItems: 'flex-end',
  //   marginBottom: 24,
  // },
  // row: {
  //   flexDirection: 'row',
  //   marginTop: 4,
  // },
});

export default SignIn;
