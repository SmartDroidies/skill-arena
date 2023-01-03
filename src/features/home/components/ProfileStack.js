import { createStackNavigator } from "@react-navigation/stack";
import Global from "../../../utils/Global";
import SignIn from "../../security/screens/SignIn";
import ForgotPassword from "../../security/screens/ForgotPassword";
import SignUp from "../../security/screens/SignUp";

export const AppStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator screenoptions={{ headerShown: true }}>
      <AppStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: Global.Constant.appName,
        }}
      />
      <AppStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: Global.Constant.appName,
        }}
      />
      <AppStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: Global.Constant.appName,
        }}
      />
    </AppStack.Navigator>
  );
};
