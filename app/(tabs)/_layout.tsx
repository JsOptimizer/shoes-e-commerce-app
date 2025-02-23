import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import CustomTab from "@/components/custom-tab";
import CustomBottomTab from "@/components/custom-bottom-tab";

const _layout = () => {
  return (
    <>
      <Tabs tabBar={(props) => <CustomBottomTab {...props} />}>
        <Tabs.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />
        <Tabs.Screen
          name="favorite"
          options={{ headerShown: false, title: "Home" }}
        />
        <Tabs.Screen
          name="cart"
          options={{ headerShown: false, title: "Home" }}
        />
        <Tabs.Screen
          name="notification"
          options={{ headerShown: false, title: "Home" }}
        />
        <Tabs.Screen
          name="account-settings"
          options={{ headerShown: false, title: "Home" }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
