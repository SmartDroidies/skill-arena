import { createStackNavigator } from "@react-navigation/stack";
import Global from "../../../utils/Global";
import Signin from "../../profile/screens/signin";

export const AppStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator screenoptions={{ headerShown: true }}>
      <AppStack.Screen
        name="Signin"
        component={Signin}
        options={{
          title: Global.Constant.appName,
        }}
      />
      {/* <AppStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: Global.Constant.appName,
        }}
      /> */}
    </AppStack.Navigator>
  );
};
