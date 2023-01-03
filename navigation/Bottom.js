import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import MyPage from "../screen/MyPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { DARK_COLOR, WHITE_COLOR } from "../colors";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Bottom = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? DarkTheme : DefaultTheme,
        // fontColor: isDark ? WHITE_COLOR : DefaultTheme,
      }}
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "#fb8c00",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="filmstrip"
              size={size}
              color={color}
            />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text-box" size={size} color={color} />
          ),
          title: "My",
        }}
        name="MyPage"
        component={MyPage}
      />
    </Tab.Navigator>
  );
};
export default Bottom;
