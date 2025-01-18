import {
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ElipsCircle from "@/components/Elips";
import Onboarding from "@/screen/Onboarding";

const index = () => {
  return (
    <View className="relative h-full bg-[#f5f5f5] w-screen ">
      <View className="absolute right-0 ">
        <ElipsCircle />
      </View>
      <Onboarding />
      <StatusBar backgroundColor="#000" style="dark" />
    </View>
  );
};

export default index;
