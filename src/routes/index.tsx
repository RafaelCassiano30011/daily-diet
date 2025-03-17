import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "@screens/Home";
import NewStack from "@screens/NewStack";

type AppRoutesProps = {
  home: undefined;
  newSnack: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesProps>;

const Stack = createNativeStackNavigator<AppRoutesProps>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="newSnack" component={NewStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
