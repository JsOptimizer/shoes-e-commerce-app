import { View, Text } from "react-native";
import React from "react";

const OnboardPagination = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      {[1,2,3].map(() => (
        <View className={`bg-brand/30 w-4 h-2 rounded-full ${''}`}></View>
      ))}
    </View>
  );
};

export default OnboardPagination;
