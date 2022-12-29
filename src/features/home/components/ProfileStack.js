import { createStackNavigator } from "@react-navigation/stack";
import Global from "../../../utils/Global";
import { ForgetPassword } from "../../security/screens/ForgetPassword";
import SignIn from "../../security/screens/SignIn";
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
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          title: Global.Constant.appName,
        }}
      />
    </AppStack.Navigator>
  );
};
